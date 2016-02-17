import { should }from 'chai';
should();
import db from '../src/database';
import { PLANTS_TYPES } from '../src/config/constans';

//Wenn der Datenbestand im Herbarium wächst müsssen auch die Tests angepasst werden.
describe('Database', () => {
    it('should get all entries in db', ()=> {
        db.getAll().should.length(3);
    });

    it('should get all entries by typ', () => {
        db.getByTyp(PLANTS_TYPES.Nutzpflanze).should.length(2);
    });

    it('should get all entries by name', () => {
        db.getByName('Alr').should.length(3);
    });

    it('should get all entries by effect', () => {
        db.getByEffect('Brech').should.length(2);
    });

});