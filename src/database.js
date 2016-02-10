//import { dbConfig } from './config/config.jsx';
//import {herps} from './config/herbarium.jsx';
//let storeName = dbConfig.storeName;
let dbStore = new PouchDB('todos');

let db = () => {
    console.log(dbStore);
};

//let db = new function () {
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
////    this.getValues = function(){
////        let keyRange = new ydn.db.KeyRange.only("Nutzpflanze");
////        let iter = new ydn.db.IndexValueIterator("herps", "Typ", keyRange);
////        dbStore.values(iter).done(function(data){
////            console.log(data);
////        });
////    }
//};

export default db;