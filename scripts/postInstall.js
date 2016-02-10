var fs = require('fs');
var ruWa = require('./rollupWorkarounds');

//
//fs.createReadStream('node_modules/pouchdb/dist/pouchdb.js')
//    .pipe(fs.createWriteStream('./www/db.js'));

fs.createReadStream('node_modules/ydn.db/jsc/ydn.db-isw-core-crypt-qry-dev.js')
    .pipe(fs.createWriteStream('./www/db.js'));

ruWa.reactRouterWA();
ruWa.reactReduxWA();