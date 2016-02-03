"use strict";

export const keyMirror = function(keys){
    let jsonObj = {};
    keys.forEach(function(item){
        jsonObj[item] = item;
    });

    return jsonObj;
};

export const PLANTS_TYPES = keyMirror([
        "Nutzpflanze",
        "Heilpflanze",
        "Giftplanze",
        "Himmlischepflanze"
    ]);
export const POISON_TYPES = keyMirror([
        "Waffengift",
        "Einnahmegift",
        "Atemgift",
        "Kontaktgift",
        "Gegengift"
    ]);
export const MEANS_TYPES = keyMirror([
        "Heilmittel",
        "Stärkungsmittel",
        "Rauschmittel",
        "Lebensmittel",
        "Instektenschutzmittel",
        "Schmerzmittel",
        "Leuchtmittel",
        "Räuchermittel",
        "Alchimistischesmittel"
    ]);
export const OTHERS_TYPES = keyMirror([
        "Parfüm",
        "Gewürz",
        "Klebstoff",
        "Speziell"
    ]);
export const SEARCH_ACTION = keyMirror([
        "CHANGE_DROPDOWN_PLANTS",
        "CHANGE_DROPDOWN_POISON",
        "CHANGE_DROPDOWN_MEANS"])


//export const INIT_STATE = {
//    "Pflanzenauswahl" : null
//};


