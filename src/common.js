// listPath is quasar docs specific (menu.js)

function parseNode(list, node, parent = {}, opts) {
  const { name, listPath, children } = node;
  let { path, category } = node;
  const { name: pname, path: ppath } = parent;
  let { type: ptype } = parent;

  const omit = !path && !listPath;
  if (!path && listPath){
    path = listPath;
  }

  let type = opts.fnType ? opts.fnType(name, path, category, ptype) : 'Section';

  let newName, newPath;
  if (opts.fnName){
    newName = opts.fnName(name, pname);
  }else{
    if (pname){
      newName = `${pname} :: ${name}`;
    }else{
      newName = name;
    }
  }
  if (opts.fnPath){
    newPath = opts.fnPath(path, ppath);
  }else{
    if (ppath){
      newPath = `${ppath}/${path}`;
    }else{
      newPath = path;
    }
  }

  const item = {
    name: newName,
    path: newPath,
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
      type,
    }
    if (omit || listPath){ // Buttons page, Quasar Flavours page
      nextParent.path = ppath;
    }
    children.forEach(function (el) {
      parseNode(list, el, nextParent, opts);
    });
  }
}

module.exports = {
  parseNode,
};
