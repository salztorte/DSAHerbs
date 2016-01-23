'use strict';

let storeName = 'herps';
let dbConfig = {
	'storeName' : storeName,
	'schema'    : {
		version    : 1,
		autoSchema : false,
		'stores'   : [
			{
				'name'    : storeName,
				'keyPath' : 'name',
				'indexes' : [{
					'name'    : 'Typ',
					'keyPath' : 'Typ'
				}, {
					'name'    : 'Using',
					'keyPath' : 'Using'
				}, {
					'name'    : 'Occurrence',
					'keyPath' : 'Occurrence'
				}, {
					'name'    : 'Effect',
					'keyPath' : 'Effect'
				}]
			}
		]
	},
	'option'    : {
		mechanisms : ['indexeddb', 'websql', 'localstorage'], // default ordering
		size       : 2 * 1024 * 1024, // 2 MB
	}
};

export { dbConfig };