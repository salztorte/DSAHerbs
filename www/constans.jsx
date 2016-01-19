"use strict";

let keyMirror = function(keys){
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
										  "Uebernatürlichepflanze"
									  ]);
export const POISON_TYPES = keyMirror([
										  "Waffengift",
										  "Einnahmegift",
										  "Atemgift",
										  "Kontaktgift"
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