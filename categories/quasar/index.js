const components = require('./components');
const guidesSections = require('./guides_sections');

function slug(str){
  return str.toLowerCase().replace(/(\s+|[./])/g, '-').replace(/['!]/g, '').replace('&','and');
}

function build(ret, name, path, anchor, type) {
  if (anchor === true){
    anchor = slug(name);
  }
  let prepath = `index.html#/`;
  if (path){
    path = `${prepath}${path}`
  }else{
    path = prepath;
  }
  if (anchor){
    path = `${path}${anchor}`
  }
  type = type || 'Component';

  ret[path] = {
    name,
    type,
    path,
  };
}

function buildComponents(list){
  const subpath = "vue-components/";
  const ret = {};

  for (let item of list){
    if (typeof item === 'string') {
      build(ret, item, subpath, true)
      // Only working in firefox, not in Chrome or Zeal:
      // name = `Q${name}`
      // anchor = `${name}-API`.replace(/\s+/g, '')
      // path = `${path}#${anchor}`
      // ret[path] = {
      //   name,
      //   type: 'Section',
      //   path,
      // };
    }
  }

  return ret;
}

function buildGuidesSections(list){
  const ret = {};
  for (let item of list){
    const { name, path, sub } = item;
    if (sub){
      for (let subitem of sub) {
        if (typeof subitem === 'string') {
          const subpath = slug(subitem);
          build(ret, `${name} :: ${subitem}`, `${path}/${subpath}`, false, 'Section');
        }else{

          // NESTED
          const { name: subname, path: subpath, sub: subsub } = subitem;
          if (subsub){
            for (let subsubitem of subsub) {
              if (typeof subsubitem === 'string') {
                const subsubpath = slug(subsubitem);
                build(ret, `${name} :: ${subname} :: ${subsubitem}`, `${path}/${subpath}/${subsubpath}`, false, 'Section');
              }
            }
          }else{
            build(ret, `${name} :: ${subname}`, `${path}/${subpath}`, false, 'Section');
          }

        }
      }
    }else{
      build(ret, name, path, false, 'Guide');
    }
  }
  return ret;
}

module.exports = {
  ...buildComponents(components),
  ...buildGuidesSections(guidesSections),
};
