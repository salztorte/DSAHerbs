import { SEARCH_ACTION }from '../config/constans';
//import db from '../database';


export const search = (seachPara) => ({
    type: SEARCH_ACTION,
    seachPara
});