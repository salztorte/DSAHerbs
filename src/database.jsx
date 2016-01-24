"use strict";
import { dbConfig } from './config.jsx';
import {herps} from './herbarium.jsx';

let storeName = dbConfig.storeName;
let dbStore = new ydn.db.Storage('dbherps', dbConfig.schema, dbConfig.option);



let db = {};
db.init = function(){
	console.log(storeName);
	console.log(JSON.stringify(herps));
//
//	dbStore.putAll(storeName,herps).done(function(keys) {
//		console.log('all ' + keys.length + ' objects added');
//	});
};

export {db};