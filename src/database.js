import { herps } from './config/herbarium';

const query = (cmp) => {
    let back = [];

    herps.forEach(herp=>{
        if(cmp(herp)) back.push(herp);
    });

    return back;
};

const db = {
    getAll: () => herps,
    getByTyp: typ => query(herp => herp.Typ == typ),
    getByName: str => query(herp => herp.Name.toLowerCase().indexOf(str.toLowerCase()) != -1)
};

export default db;