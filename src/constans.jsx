"use strict";

let keyMirror = function(keys){
    let jsonObj = {};
    keys.forEach(function(item){
        jsonObj[item] = item;
    });

    return jsonObj;
};

const PLANTS_TYPES = keyMirror(
    [
        "Nutzpflanze",
        "Heilpflanze",
        "Giftplanze",
        "Himmlischepflanze"
    ]);
const POISON_TYPES = keyMirror(
    [
        "Waffengift",
        "Einnahmegift",
        "Atemgift",
        "Kontaktgift",
        "Gegengift"
    ]);
const MEANS_TYPES = keyMirror(
    [
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
const OTHERS_TYPES = keyMirror(
    [
        "Parfüm",
        "Gewürz",
        "Klebstoff",
        "Speziell"
    ]);

export { PLANTS_TYPES, MEANS_TYPES, POISON_TYPES, OTHERS_TYPES, keyMirror };

