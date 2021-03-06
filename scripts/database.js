const fs = require('fs');
const path = require('path');
const ramda = require('ramda');
const sqlite3 = require('sqlite3');

const lib = process.argv[2];

const build = {
  quasar: require('../src/quasar'),
  vuelidate: require('../src/vuelidate'),
  'vue-test': require('../src/vue-test'),
};
const wip = 'wip';

function getResources(docset){
  return path.join('docsets', `${docset}.docset`, 'Contents/Resources');
}

function createDatabase(docset, categories, append) {
  const dbPath = path.join(getResources(docset), 'docSet.dsidx');

  if (fs.existsSync(dbPath) && !append) {
    fs.unlinkSync(dbPath);
  }

  // Initialize DB
  const db = new sqlite3.Database(dbPath);

  function insertQuery({ name, path, type }) {
    return `INSERT OR IGNORE INTO searchIndex(name, type, path) VALUES ("${name}", "${type}", "${path}");`;
  }

  db.serialize(() => {
    db.run(
      'CREATE TABLE IF NOT EXISTS searchIndex(id INTEGER PRIMARY KEY, name TEXT, type TEXT, path TEXT);',
    );
    db.run('CREATE UNIQUE INDEX IF NOT EXISTS anchor ON searchIndex (name, type, path);');

    ramda.forEachObjIndexed(function(value, key) {
      let { skip, name, path, type } = value;
      if (!path){ // if not path, use key
        path = key;
      }
      if (skip) {
        console.log('Skipping', key);
      } else {
        console.log('Adding entry for', key, name, type);
        console.log(
          insertQuery({
            name,
            path,
            type,
          }),
        );
        db.run(
          insertQuery({
            name,
            path,
            type,
          }),
        );
      }
    }, categories);
  });
}

let categories, docset, documents, toc, subdir;
switch(lib) {
  case 'quasar':
    categories = build[lib].getList(path.join(wip, lib));
    createDatabase(lib, categories);
    break;
  case 'vuelidate':
    documents = path.join(getResources(lib), 'Documents');
    build[lib].getList(documents).then((categories) => {
      // docset = path.join(docsets, 'vuelidate.docset');
      createDatabase(lib, categories);
    });
    break;
  case 'vue-test':
    createDatabase(lib, []); // new database

    // documents = path.join(getResources(lib), 'Documents', 'vue-testing-handbook');
    subdir = 'vue-test-utils';
    documents = path.join(getResources(lib), 'Documents', subdir);
    toc = path.join(wip, lib, 'vue-test-utils', 'toc.js');
    build[lib].getList(documents, toc, subdir).then((categories) => {
      // docset = path.join(docsets, 'vuelidate.docset');
      // console.log(categories)
      createDatabase(lib, categories, true);
    });

    subdir = 'vue-testing-handbook';
    documents = path.join(getResources(lib), 'Documents', subdir);
    toc = path.join(wip, lib, 'vue-testing-handbook', 'toc.js');
    build[lib].getList(documents, toc, subdir).then((categories) => {
      // docset = path.join(docsets, 'vuelidate.docset');
      // console.log(categories)
      createDatabase(lib, categories, true);
    });
    break;
}

