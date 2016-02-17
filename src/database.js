import { herps } from './config/herbarium';

const db = {
    getAll: () => herps,

    getByTyp: typ => query('Typ', typ),

    getByName: name => query('Name', name),

    getByEffect: effect => query('Effect', effect),


    getByMulti: traits => {
        let keys = Object.keys(traits);
        const multiCmp = herp =>  keys.reduce((bool, key) => (
            (bool) ? cmp(herp[key], traits[key]) : false
        ), true);

        return herps.reduce((prev, cur) => {
            if (multiCmp(cur))
                prev.push(cur);
            return prev;
        }, []);
    }
};

const query = (key, search) => herps.reduce((prev, cur) => {
    if (cmp(cur[key], search))
        prev.push(cur);

    return prev;
}, []);

const cmp = (herpTrait, search) => {
    if (Array.isArray(herpTrait))
        herpTrait = herpTrait.join(';');
    return herpTrait.toLowerCase().indexOf(search.toLowerCase()) != -1
};


export default db;