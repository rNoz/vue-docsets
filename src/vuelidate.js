const fsc = require('fs-cheerio');
const path = require('path');

const parseNode = require('./common').parseNode;

async function getList(dir){
  const htmlFile = path.join(dir, 'index.html');

  const $ = await fsc.readFile(htmlFile);

  const children = [];
  let node = null;

  $('ul.list.nav-list > li').each((i, el) => {
    el = $(el);
    const heading = el.hasClass('list__heading');
    let path = el.find('a.link');
    if (path.length){
      path = path.attr('href');
    }
    if (path){
      const name = el.text();
      const current = {
        name,
        path,
        // path: el.find('a.link').attr()
      };
      let category;
      switch(name.toLowerCase().trim()){
        case 'validators':
          category = 'validator';
          break;
        case 'examples':
          category = 'example';
          break;
      }

      if (heading) {
        current.children = [];
        if (category){
          current.category = category;
        }
        if (node) {
          children.push(node);
        }
        node = current;
      }else{

        if (category){
          current.category = category;
        } else if (node && node.category){
          current.category = node.category;
        }

        if (node) {
          node.children.push(current);
        } else {
          children.push(current);
        }
      }
    }
  });
  if (node) {
    children.push(node);
    node = null;
  }

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
    fnName: (name, pname) => pname ? `${pname} :: ${name}` : name,
    fnPath: (path, ppath) => `index.html${path}`,
  }
  parseNode(list, { children }, undefined, opts);
  return list;
}

module.exports = {
  getList
};
