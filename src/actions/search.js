import { SEARCH_ACTION }from '../config/constans';

export const search = (seachPara) => ({
    type: SEARCH_ACTION,
    seachPara
});