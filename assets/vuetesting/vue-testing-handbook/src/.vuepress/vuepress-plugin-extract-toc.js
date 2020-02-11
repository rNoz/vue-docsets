const path = require('path');
const fs = require('fs');

let restPages = null;

export default ({ Vue, options, router, siteData }) => {
  if (restPages == null){
    restPages = siteData.pages.length;
  }
  restPages--;

  if (restPages === 0){
    const sidebar = []
    // for (const page of siteData.pages) {
    //   sidebar.push({path: page.regularPath, title: page.title, headers: page.headers})
    // }
    // console.log(sidebar);
    // console.log(__dirname);
    // console.log(options.dest);
    // console.log(process.cwd());
    const tocFile = path.join(process.cwd(), 'src/.vuepress/dist/toc.js');
    console.log(`\nAfter the last page (${siteData.pages.length}) is rendered, writing toc.js in ${tocFile}`);
    fs.writeFileSync(tocFile, `module.exports = ${JSON.stringify(siteData.pages, null, 2)}`);
  }
}
