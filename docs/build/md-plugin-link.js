/**
 * Converts links to DocLink
 */

module.exports = function (md) {
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx]

    const hrefIndex = token.attrIndex('href')

    if (hrefIndex >= 0) {
      const link = token.attrs[hrefIndex]

      link[0] = 'to'
      let href = link[1];
      const protos = ['http:', 'https:', 'mailto:'];
      let valid = false;
      for (let proto of protos){
        if (href.startsWith(proto)){
          valid = true;
          break;
        }
      }
      if (!valid && href[0] !== '/') {
        if (href.startsWith('../app-extensions')) {
          href = href.replace(/^\.\.\//, '');
        }
        href = `/${href}`;
      }
      link[1] = decodeURI(href)

      token.tag = 'doc-link'
    }

    return self.renderToken(tokens, idx, options)
  }

  md.renderer.rules.link_close = (tokens, idx, options, env, self) => {
    const token = tokens[idx]

    token.tag = 'doc-link'
    return self.renderToken(tokens, idx, options)
  }
}
