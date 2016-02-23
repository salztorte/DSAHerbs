import { herps } from './config/herbarium';

let cmp = (item, searchTerm) => {
    if (Object.keys(searchTerm).length == 1) {
        let key = Object.keys(searchTerm)[0];
        return singelTrait(item[key], searchTerm[key]);
    } else {
        return multiTrait(item, searchTerm);
    }
};
let singelTrait = (trait, searchTrait) => {
    if (Array.isArray(trait))
        trait = trait.join(';');

    return trait.toLowerCase().indexOf(searchTrait.toLowerCase()) != -1;
};
let multiTrait = (item, searchTerm) => {
    return Object.keys(searchTerm).reduce((bool, key) => {
        return (bool) ? singelTrait(item[key], searchTerm[key]) : false;
    }, true);
};


const JsonQuery = function (json) {
    this.data = json;
};
JsonQuery.prototype.query = function(searchTerm = []){
    if (searchTerm.length == 0){
        return this.data;
    }else{
        return this.data.reduce((result, item) => {
            if (cmp(item, searchTerm))
                result.push(item);
            return result;
        }, []);
    }
};

export default JsonQuery;
export let db = new JsonQuery(herps);



