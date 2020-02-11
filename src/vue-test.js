const fsc = require('fs-cheerio');
const path = require('path');

const parseNode = require('./common').parseNode;

const names = {
  'vue-testing-handbook': 'Handbook',
  'vue-test-utils': 'Utils',
}

async function getList(dir, tocFile, subdir){
  const NAME = names[subdir];
  tocFile = path.join('..', tocFile);
  // console.log(tocFile)
  // console.log(process.cwd())

  const toc = require(tocFile);
  // console.log(toc)
  const tocMap = Object.fromEntries(toc.map(el => {
    let href = el.regularPath.slice(1);
    if (href === '' || href[href.length - 1] === '/'){
      href = `${href}index.html`;
    }
    const headers = el.headers ? el.headers.map(sel => {
      if (sel.level === 2){
        return {name: sel.title, path: `${href}#${sel.slug}`, children: []}
      }else{
        console.error("Omitted:", sel)
      }
    }).filter(el => el != null) : [];
    return [href, {name: el.title, path: href, children: headers}]
  }));

  // console.log(tocMap);

  const htmlFile = path.join(dir, 'index.html');
  const $ = await fsc.readFile(htmlFile);

  const children = [];
  $('ul.sidebar-links > li > a.sidebar-link').each((i, el) => {
    el = $(el);
    // const heading = el.hasClass('sidebar-link'); // sublinks: `sidebar-sub-headers`
    // let path = el.find('a.sidebar-link');
    if (el.length) {
      let href = el.attr('href');
      if (href === '' || href[href.length - 1] === '/'){
        href = `${href}index.html`;
      }
      let title = el.text().trim()
      const tocData = tocMap[href];
      if (tocData){
        tocData.name = title;
        children.push(tocData)
      }else{
        console.error(`Not found: ${href} ${title} in toc`);
      }
    }
  });

  // console.log(children);
  const list = []
  const opts = {
    fnType: (name, path, category, ptype) => {
      switch(category){
        case 'example':
          return 'Example';
          break;
        case 'validator':
          return 'Validator';
          break;
        default:
          return 'Section';
      }
    },
    fnName: (name, pname) => (pname ? [pname, name] : [name]).filter(el => el != null).join(" :: "),
    // fnName: (name, pname) => [NAME, name].filter(el => el != null).join("/"),
    fnPath: (path, ppath) => `${subdir}/${path}`,
    // fnPath: (path, ppath) => {
    //   console.log("fnPath", path);
    //  // `index.html${path}`,
    // }
  }
  parseNode(list, { children }, undefined, opts);
  for (let item of list){
    const path = item.path;
    const name = item.name;
    if (path.indexOf('guides') >= 0) {
      item.type = 'Guide';
    }else if (path.indexOf('methods') >= 0) {
      item.type = 'Method';
    }else if (path.indexOf('properties') >= 0){
      item.type = 'Property';
    } else if (name.indexOf('Component') >= 0) {
      item.type = 'Component';
    }
    item.name = `${NAME} / ${name}`
  }
  // console.log(list)
  return list;
}

module.exports = {
  getList
};
