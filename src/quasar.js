const fs = require('fs');
const Path = require('path');

function parseNode(list, node, parent = {}) {
  const { name, listPath, children } = node;
  let { path } = node;
  const { name: pname, path: ppath } = parent;
  let { category } = parent;

  const omit = !path && !listPath;
  if (!path && listPath){
    path = listPath;
  }

  if (path && path.indexOf('components') >= 0) {
    category = 'component';
  }

  let type;
  switch(category){
    case 'component': {
      type = 'Component';
    } break
    default:
      type = 'Section';
  }

  const item = {
    name: (pname ? `${pname} :: ${name}` : name),
    path: (ppath ? `${ppath}/${path}` : path),
    type,
  };

  if (!omit){ // Quasar Flavours page
    list.push(item);
  }

  if (children) {
    const nextParent = {
      name: item.name,
      path: item.path,
      category,
    }
    if (omit || listPath){ // Buttons page, Quasar Flavours page
      nextParent.path = ppath;
    }
    children.forEach(function (el) {
      parseNode(list, el, nextParent);
    });
  }
}

function getList(dir){
  const menuFile = Path.join(dir, 'docs/src/assets/menu');
  const menu = require(Path.join('..', menuFile));
  const list = [];
  parseNode(list, { path: 'index.html#', children: menu });
  return list;
}

module.exports = {
  getList
};
