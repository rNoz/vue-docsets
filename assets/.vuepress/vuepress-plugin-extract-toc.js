const path = require('path');
const fs = require('fs');

let restPages = null;
let allPages = null;

export default ({ Vue, options, router, siteData }) => {
  if (restPages == null){
    restPages = siteData.pages.length;
    allPages = restPages;
  }
  restPages--;
  // console.log(` ${restPages+1}/${allPages}`)

  if (restPages === 0){
    // for (const page of siteData.pages) {
    //   sidebar.push({path: page.regularPath, title: page.title, headers: page.headers})
    // }
    // console.log(sidebar);
    // console.log(__dirname);
    // console.log(options.dest);
    // console.log(process.cwd());
    // let outDir;
    // if (CONTEXT != null) {
    //   // outDir = path.join(CONTEXT.outDir, '.vuepress/dist');
    //   outDir = CONTEXT.outDir;
    //   console.log(JSON.stringify(CONTEXT))
    // }else{
    //   outDir = '';
    // }
    const tocFile = path.join(process.cwd(), 'toc.js');
    setTimeout(() => {
      console.log(`\nAfter the last page (${allPages}) is rendered, writing toc.js in ${tocFile}`);
    }, 300);
    fs.writeFileSync(tocFile, `module.exports = ${JSON.stringify(siteData.pages, null, 2)}`);
  }
}
