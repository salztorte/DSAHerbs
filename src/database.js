import { dbConfig } from './config/config.jsx';
import {herps} from './config/herbarium.jsx';
let storeName = dbConfig.storeName;
let dbStore = new ydn.db.Storage('dbherps', dbConfig.schema, dbConfig.option);

let db = {
    'init' : cb => {
        herps.forEach(function (herp) {
            dbStore.put(storeName, herp)
                .done(()=>{
                    if(cb) cb();
                })
                .fail(err => {
                    if(cb) cb(err);
                });
        });
    },
    'getAllValues' : cb => {
        dbStore.values(storeName).done(function(dbRecords){
            if(cb) cb(dbRecords);
        });
    },
    getValues : cb => {
        dbStore.values(storeName, ['Typ', 'Name']).done(function(dbRecords){
            if(cb) cb(dbRecords);
        });
    }
};

export default db;