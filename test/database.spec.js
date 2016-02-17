import { expect }from 'chai';
import db from '../src/database';
import { PLANTS_TYPES } from '../src/config/constans';

//Wenn der Datenbestand im Herbarium wächst müsssen auch die Tests angepasst werden.
describe('Database', () => {
    it('should get all entries in db', ()=> {
        expect(db.getAll()).length(3);
    });

    it('should get all entries by typ', () => {
        expect(db.getByTyp(PLANTS_TYPES.Nutzpflanze)).length(2);
    });

    it('should get all entries by name', () => {
        expect(db.getByName('Alr')).length(3);
    });

    it('should get all entries by effect', () => {
        expect(db.getByEffect('Brech')).length(2);
    });

    it('should get entries with by multipel traits', ()=>{
        let traits = {
            Name : "Alr",
            Typ: PLANTS_TYPES.Nutzpflanze
        };

        expect(db.getByMulti(traits)).length(2);
    });

});