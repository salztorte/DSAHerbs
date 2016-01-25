"use strict";
import { dbConfig } from './config.jsx';
import {herps} from './herbarium.jsx';

let storeName = dbConfig.storeName;
let dbStore = new ydn.db.Storage('dbherps', dbConfig.schema, dbConfig.option);


let db = new function () {
    this.init = function () {
        herps.forEach(function (herp) {
            dbStore.put(storeName, herp)
                .done(function (key) {
                })
                .fail(function (err) {
                    console.log(err);
                });
        });
    };
};


export {db};