const path = require('path');

const docsetDir = lib =>
  path.join(__dirname, `../${lib}.docset/Contents/Resources`);
const rawHtmlDir = lib => path.join(__dirname, `../raw-html/${lib}`);

module.exports = function getPaths(lib) {
  if (lib === 'vuex') {
    return {
      onlineUrl: 'https://vuex.vuejs.org',
      docsetResourcesDir: docsetDir('vuex'),
      rawHtmlDir: rawHtmlDir('vuex'),
      categories: require('../categories/vuex'),
      categoriesDir: '../categories/vuex',
    };
  } else if (lib === 'vue-router') {
    return {
      onlineUrl: 'https://router.vuejs.org',
      docsetResourcesDir: docsetDir('vuerouter'),
      rawHtmlDir: rawHtmlDir('vue-router'),
      categories: require('../categories/vue-router'),
      categoriesDir: '../categories/vue-router',
    };
  } else if (lib === 'vue-test') {
    return {
      onlineUrl: 'https://vue-test-utils.vuejs.org',
      docsetResourcesDir: docsetDir('vuetest'),
      rawHtmlDir: rawHtmlDir('vue-test-utils'),
      categories: require('../categories/vue-test-utils'),
      categoriesDir: '../categories/vue-test-utils',
    };
  } else if (lib === 'quasar') {
    return {
      onlineUrl: 'https://quasar.dev',
      // copied all the contests of quasar/docs/dist/quasar.dev (quasar build)
      docsetResourcesDir: docsetDir('quasar'),
      // rawHtmlDir: rawHtmlDir('quasar.dev'),
      categories: require('../categories/quasar'),
      // categoriesDir: '../categories/quasar',
    };
  } else {
    console.log("lib not found: ", lib)
  }
};
