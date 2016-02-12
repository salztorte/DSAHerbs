var fs = require('fs');
var ruWa = require('./rollupWorkarounds');

//
//fs.createReadStream('node_modules/pouchdb/dist/pouchdb.js')
//    .pipe(fs.createWriteStream('./www/db.js'));

//ist zu groß für babel
fs.createReadStream('node_modules/ydn.db/jsc/ydn.db-dev.js')
    .pipe(fs.createWriteStream('./www/db.js'));

ruWa.reactRouterWA();
ruWa.reactReduxWA();

//um die datenbanktest auszuführen
fs.createReadStream('node_modules/ydn.db/jsc/ydn.db-dev.js')
    .pipe(fs.createWriteStream('./test/testDb/vendor/db.js'));

fs.createReadStream('node_modules/mocha/mocha.css')
    .pipe(fs.createWriteStream('./test/testDb/vendor/mocha.css'));

fs.createReadStream('node_modules/mocha/mocha.js')
    .pipe(fs.createWriteStream('./test/testDb/vendor/mocha.js'));

fs.createReadStream('node_modules/chai/chai.js')
    .pipe(fs.createWriteStream('./test/testDb/vendor/chai.js'));
