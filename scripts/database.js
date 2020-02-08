const fs = require('fs');
const path = require('path');
const ramda = require('ramda');
const sqlite3 = require('sqlite3');

const lib = process.argv[2];

const build = {
  quasar: require('../src/quasar'),
}
const wip = 'wip';
const docsets = 'docsets';


function createDatabase(docset, categories) {
  const dbPath = path.join(docset, 'Contents/Resources/docSet.dsidx');

  if (fs.existsSync(dbPath)) {
    fs.unlinkSync(dbPath);
  }

// Initialize DB
  const db = new sqlite3.Database(dbPath);

  function insertQuery({ name, path, type }) {
    return `INSERT OR IGNORE INTO searchIndex(name, type, path) VALUES ("${name}", "${type}", "${path}");`;
  }
  // console.log(categories)

  db.serialize(() => {
    db.run(
      'CREATE TABLE searchIndex(id INTEGER PRIMARY KEY, name TEXT, type TEXT, path TEXT);',
    );
    db.run('CREATE UNIQUE INDEX anchor ON searchIndex (name, type, path);');

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


switch(lib){
  case 'quasar':
    const categories = build.quasar.getList(path.join(wip, lib));
    const docset = path.join(docsets, 'quasar.docset')
    createDatabase(docset, categories)
    break;
}

