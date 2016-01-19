"use strict";
import { PLANTS_TYPES , POISON_TYPES , MEANS_TYPES , OTHERS_TYPES } from './www/constans.jsx';

var herp = {
	"Alraune"                : {
		"Quelle"       : "ZBA Seite 227",
		"Typ"          : PLANTS_TYPES.Nutzpflanze,
		"Verarbeitung" : ["eingelete Alraunwurzel", "Alraunen-Sud"],
		"Wirkung"      : "Brechreiz",
	},
	"eingelete Alraunwurzel" : {
		"Quelle"  : "ZBA Seite 227",
		"Typ"     : PLANTS_TYPES.Nutzpflanze,
		"Wirkung" : "Brechreiz"
	},
	"Alraunen-Sud"           : {
		"Typ"          : MEANS_TYPES.Alchimistischesmittel,
		"Wirkung"      : "",
		"Quelle"       : "",
		"Verarbeitung" : []
	}
};

/*{
 "Typ" : "",
 "Wirkung" : "",
 "Quelle" : "",
 "Verarbeitung" : []
 }
 */