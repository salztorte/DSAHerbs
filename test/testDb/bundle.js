var database = (function () {
    'use strict';

    var storeName$1 = 'herps';
    var dbConfig = {
        'storeName': storeName$1,
        'schema': {
            'stores': [{
                'name': storeName$1,
                'keyPath': 'Name',
                'indexes': [{
                    'name': 'Name',
                    'keyPath': 'Name'
                }, {
                    'name': 'Typ',
                    'keyPath': 'Typ'
                }, {
                    'name': 'Using',
                    'keyPath': 'Using'
                }, {
                    'name': 'Occurrence',
                    'keyPath': 'Occurrence'
                }, {
                    'name': 'Effect',
                    'keyPath': 'Effect'
                }]
            }]
        },
        'schemaTest': {
            'stores': [{
                'name': 'test',
                'keyPath': 'name'
            }]
        },
        'option': {
            mechanisms: ['indexeddb', 'websql', 'localstorage'], // default ordering
            size: 2 * 1024 * 1024 // 2 MB
        }
    };

    var keyMirror = function keyMirror(keys) {
        var jsonObj = {};
        keys.forEach(function (item) {
            jsonObj[item] = item;
        });
        return jsonObj;
    };

    var PLANTS_TYPES = keyMirror(['Nutzpflanze', 'Heilpflanze', 'Giftplanze', 'Himmlischepflanze']);
    var POISON_TYPES = keyMirror(['Waffengift', 'Einnahmegift', 'Atemgift', 'Kontaktgift', 'Gegengift']);
    var MEANS_TYPES = keyMirror(['Heilmittel', 'Stärkungsmittel', 'Rauschmittel', 'Lebensmittel', 'Instektenschutzmittel', 'Schmerzmittel', 'Leuchtmittel', 'Räuchermittel', 'Alchimistischesmittel']);
    var OTHERS_TYPES = keyMirror(['Parfüm', 'Gewürz', 'Klebstoff', 'Speziell']);
    var SELECT_ACTION = keyMirror(['CHANGE_DROPDOWN_PLANTS', 'CHANGE_DROPDOWN_POISON', 'CHANGE_DROPDOWN_MEANS']);

    //export const INIT_STATE = {
    //    'Pflanzenauswahl' : null
    //};

    //OTHERS_TYPES , POISON_TYPES
    var herps = [{
        'Name': 'Alraune',
        'Source': 'ZBA Seite 227',
        'Typ': PLANTS_TYPES.Nutzpflanze,
        'Using': ['eingelete Alraunwurzel', 'Alraunen-Sud'],
        'Occurrence': [],
        'Effect': 'Brechreiz'
    }, {
        'Name': 'eingelete Alraunwurzel',
        'Source': 'ZBA Seite 227',
        'Typ': PLANTS_TYPES.Nutzpflanze,
        'Effect': 'Brechreiz'
    }, {
        'Name': 'Alraunen-Sud',
        'Typ': MEANS_TYPES.Alchimistischesmittel,
        'Effect': '',
        'Quelle': '',
        'Verarbeitung': []
    }];

    var storeName = dbConfig.storeName;
    var dbStore = new ydn.db.Storage('dbherps', dbConfig.schema, dbConfig.option);

    var db = new function () {
        var valuesOf = function valuesOf(iter, cb) {
            dbStore.valuesOf(iter).done(function (dbRecords) {
                if (cb) cb(dbRecords);
            });
        };

        this.init = function (cb) {
            herps.forEach(function (herp) {
                dbStore.put(storeName, herp).done(function () {
                    if (cb) cb();
                }).fail(function (err) {
                    if (cb) cb(err);
                });
            });
        };

        this.getAllValues = function (cb) {
            dbStore.values(storeName).done(function (dbRecords) {
                if (cb) cb(dbRecords);
            });
        };

        this.getByTyp = function (typ, cb) {
            var keyRange = new ydn.db.KeyRange.only(typ);
            var iter = new ydn.db.IndexValueIterator(storeName, "Typ", keyRange);
            valuesOf(iter, cb);
        };
        this.getByName = function (name, cb) {
            var keyRange = new ydn.db.KeyRange.lowerBound(name);
            var iter = new ydn.db.KeyIterator(storeName, keyRange);
            valuesOf(iter, cb);
        };
    }();

    return db;

}());