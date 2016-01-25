"use strict";
import { dbConfig } from './config.jsx';
import {herps} from './herbarium.jsx';

let storeName = dbConfig.storeName;
let dbStore = new ydn.db.Storage('dbherps', dbConfig.schema, dbConfig.option);



let db = {};
db.init = function(){
	dbStore.putAll(storeName,herps[0]).done(function(keys) {
		console.log('all ' + keys.length + ' objects added');
	});
};

export {db};