"use strict";
import { dbConfig } from './config/config.jsx';
import {herps} from './config/herbarium.jsx';
//import * as ydn from '../node_modules/ydn.db/jsc/ydn.db-dev'
let ydn = ydn || {};
ydn.db = require('../node_modules/ydn.db/jsc/ydn.db-isw-core-crypt-qry-dev');


console.log(JSON.stringify(ydn.db.Storage));


let storeName = dbConfig.storeName;
//let dbStore = new ydn.db.Storage('dbherps', dbConfig.schema, dbConfig.option);
//
let db = new function () {
//    this.init = function () {
//        herps.forEach(function (herp) {
//            dbStore.put(storeName, herp)
//                .done(function (key){
//                })
//                .fail(function (err) {
//                    console.log(err);
//                });
//        });
//    };
//    this.getValues = function(){
//        let keyRange = new ydn.db.KeyRange.only("Nutzpflanze");
//        let iter = new ydn.db.IndexValueIterator("herps", "Typ", keyRange);
//        dbStore.values(iter).done(function(data){
//            console.log(data);
//        });
//    }
};

export default db;