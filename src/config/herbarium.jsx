import { PLANTS_TYPES, MEANS_TYPES  } from './constans';
//OTHERS_TYPES , POISON_TYPES
let herps = [
    {
        'Name' : 'Alraune',
        'Source' : 'ZBA Seite 227',
        'Typ' : PLANTS_TYPES.Nutzpflanze,
        'Using' : ['eingelete Alraunwurzel', 'Alraunen-Sud'],
        'Occurrence' : [],
        'Effect' : 'Brechreiz'
    },
    {
        'Name' : 'eingelete Alraunwurzel',
        'Source' : 'ZBA Seite 227',
        'Typ' : PLANTS_TYPES.Nutzpflanze,
        'Effect' : 'Brechreiz'
    },
    {
        'Name' : 'Alraunen-Sud',
        'Typ' : MEANS_TYPES.Alchimistischesmittel,
        'Effect' : '',
        'Quelle' : '',
        'Verarbeitung' : []
    }
];

export {herps};
/*{
 'Typ' : '',
 'Wirkung' : '',
 'Source' : '',
 'Using' : []
 }
 */