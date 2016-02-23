import { SEARCH_ACTION } from '../config/constans';
import { db } from '../database';
const INIT_STATE =  {};

export default function doSearch(state = INIT_STATE, action){
    let nextState = JSON.parse(JSON.stringify(state));
    if(action.type == SEARCH_ACTION) {
        nextState = db.query(action.seachPara);
    }
    return nextState;
}