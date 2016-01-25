"use strict";
import { dbConfig } from './config.jsx';
import {herps} from './herbarium.jsx';

let storeName = dbConfig.storeName;
let dbStore = new ydn.db.Storage('dbherps', dbConfig.schema, dbConfig.option);

let db = new function () {
    this.init = function () {
        db.count(storeName).done(function (count) {
            console.log(count);
        });
        herps.forEach(function (herp) {
            dbStore.put(storeName, herp)
                .done(function (key) {
                })
                .fail(function (err) {
                    console.log(err);
                });
        });
    };


    this.getValues = function(){

    }
};

export {db};