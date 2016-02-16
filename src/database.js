import { herps } from './config/herbarium';

//const query = (cmp) => {
//    let back = [];
//    for(let herp in herps){
//        if(cmp(herp)) back.push(herp);
//    }
//    return back;
//};

const db = {
    getAll : () => herps,
    getByTyp: (typ) => {
        let back = [];
        for(let herp in herps){
            if(herp.Typ == typ) back.push(herp);
        }
        return back;
    }
    //getByName : (name) => {
    //    let back = [];
    //
    //}
};

export default db;


//import { dbConfig } from './config/config.jsx';
//import {herps} from './config/herbarium';
//let storeName = dbConfig.storeName;
//let dbStore = new ydn.db.Storage('dbherps', dbConfig.schema, dbConfig.option);
//
//let db = new function(){
//    let valuesOf = (iter, cb)=>{
//        dbStore.valuesOf(iter)
//            .done(function (dbRecords) {
//                if (cb) cb(dbRecords);
//            });
//    };
//
//    this.init = cb => {
//        herps.forEach(function (herp) {
//            dbStore.put(storeName, herp)
//                .done(()=> {
//                    if (cb) cb();
//                })
//                .fail(err => {
//                    if (cb) cb(err);
//                });
//        });
//    };
//
//    this.getAllValues = cb => {
//        dbStore.values(storeName)
//            .done(function (dbRecords) {
//                if (cb) cb(dbRecords);
//            });
//    };
//
//    this.getByTyp = (typ, cb)=> {
//        const keyRange = new ydn.db.KeyRange.only(typ);
//        const iter = new ydn.db.IndexValueIterator(storeName, 'Typ', keyRange);
//        valuesOf(iter, cb);
//    };
//    this.getByName= (name, cb) => {
//        const keyRange = new ydn.db.KeyRange.lowerBound(name);
//        const iter = new ydn.db.KeyIterator(storeName, keyRange);
//        valuesOf(iter, cb);
//    };
//};
//
//export default db;