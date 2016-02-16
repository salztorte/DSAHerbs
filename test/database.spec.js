import { should }from 'chai';
should();
import db from '../src/database';
import { PLANTS_TYPES } from '../src/config/constans';

const getJsonSize = json => Object.keys(json).length;

describe("Database", () => {
    it("should get all entries in db", ()=> {
        db.getAll().should.length(3);
    });

    it("should get all entries by typ", () => {
        db.getByTyp(PLANTS_TYPES.Nutzpflanze).should.length(2);
    });

});