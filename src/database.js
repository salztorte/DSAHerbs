import { herps } from './config/herbarium';

const query = cmp => herps.reduce((prev, cur) => {
    if (cmp(cur)) prev.push(cur);
    return prev;
}, []);

const db = {
    getAll: () => herps,
    getByTyp: typ => query(herp => herp.Typ == typ),
    getByName: name => query(herp => herp.Name.toLowerCase().indexOf(name.toLowerCase()) != -1),
    getByEffect : effect => query(herp => herp.Effect.toLowerCase().indexOf(effect.toLowerCase()) != -1)
};

export default db;