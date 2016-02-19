import { expect }from 'chai';
import { herps } from '../src/config/herbarium';
import JsonQuery from '../src/database';
import { PLANTS_TYPES } from '../src/config/constans';

let db = new JsonQuery(herps);

//Wenn der Datenbestand im Herbarium wächst müsssen auch die Tests angepasst werden.
describe('Database', () => {
    it('should get all entries in db', ()=> {
        expect(db.query()).length(3);
    });

    it('should get all entries by typ', () => {
        expect(db.query({'Typ':PLANTS_TYPES.Nutzpflanze})).length(2);
    });

    it('should get all entries by name', () => {
        expect(db.query({'Name' : 'Alr'})).length(3);
    });

    it('should get all entries by effect', () => {
        expect(db.query({'Effect':'Brech'})).length(2);
    });

    it('should get entries with by multipel traits', ()=>{
        let traits = {
            Name : 'Alr',
            Typ: PLANTS_TYPES.Nutzpflanze
        };
        expect(db.query(traits)).length(2);
    });

});