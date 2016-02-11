import { should }from 'chai';
should();
import * as actions from '../../src/actions/select';
import {SELECT_ACTION as types} from '../../src/config/constans';

describe('select action', () => {
    it('should create an action to change plants', () => {
        const value = 'Tunin';
        const expectedAction = {
            type: types.CHANGE_DROPDOWN_PLANTS,
            value
        };

        actions.changePlant(value).should.be.eql(expectedAction);
    });

    it('should create an action to change poison', () => {
        const value = 'Tunin';
        const expectedAction = {
            type: types.CHANGE_DROPDOWN_POISON,
            value
        };

        actions.changePoison(value).should.be.eql(expectedAction);
    });


    it('should create an action to change means', () => {
        const value = 'Tunin';
        const expectedAction = {
            type: types.CHANGE_DROPDOWN_MEANS,
            value
        };

        actions.changeMeans(value).should.be.eql(expectedAction);
    });

});