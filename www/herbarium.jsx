"use strict";
import { PLANTS_TYPES , POISON_TYPES , MEANS_TYPES , OTHERS_TYPES } from './www/constans.jsx';

let herp = {
	"Alraune"                : {
		"Source"       : "ZBA Seite 227",
		"Typ"          : PLANTS_TYPES.Nutzpflanze,
		"Using" : ["eingelete Alraunwurzel", "Alraunen-Sud"],
		"Effect"      : "Brechreiz",
	},
	"eingelete Alraunwurzel" : {
		"Source"  : "ZBA Seite 227",
		"Typ"     : PLANTS_TYPES.Nutzpflanze,
		"Effect" : "Brechreiz"
	},
	"Alraunen-Sud"           : {
		"Typ"          : MEANS_TYPES.Alchimistischesmittel,
		"Effect"      : "",
		"Quelle"       : "",
		"Using" : []
	}
};

/*{
 "Typ" : "",
 "Wirkung" : "",
 "Source" : "",
 "Using" : []
 }
 */