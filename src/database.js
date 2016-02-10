import { dbConfig } from './config/config.jsx';
import {herps} from './config/herbarium.jsx';

let storeName = dbConfig.storeName;
let dbStore = new ydn.db.Storage('dbherps', dbConfig.schema, dbConfig.option);


let db = new function () {
    this.init = function () {
        herps.forEach(function (herp) {
            dbStore.put(storeName, herp)
                .fail(err => {
                    console.log(err);
                });
        });
    };

    this.getValues = function(){
        let keyRange = new ydn.db.KeyRange.only('Nutzpflanze');
        dbStore.values(storeName, keyRange, 100).done(function(data){
            console.log(data);
        });
    };
};

export default db;