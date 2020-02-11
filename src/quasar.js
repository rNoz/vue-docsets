const fs = require('fs');
const Path = require('path');

const parseNode = require('./common').parseNode;

function getList(dir){
  const menuFile = Path.join(dir, 'src/assets/menu');
  const menu = require(Path.join('..', menuFile));
  const list = [];

  const opts = {
    quasar: true,
    fnType: (name, path, category, ptype) => {
      if (ptype === 'Component') {
        return 'Component';
      }
      if (path && path.indexOf('components') >= 0) {
        return 'Component';
      }
      return 'Section';
    }
  }

  parseNode(list, { path: 'index.html#', children: menu }, undefined, opts);
  return list;
}

module.exports = {
  getList
};
