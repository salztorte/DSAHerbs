import { SEARCH_ACTION }from '../config/constans';

export const doSearch = (seachPara) => ({
    type: SEARCH_ACTION,
    seachPara
});