import { expect }from 'chai';

import * as actions from '../../src/actions/select';
import {SELECT_ACTION as types} from '../../src/config/constans';

describe('select action', () => {
    it('should create an action to change plants', () => {
        const value = 'Tunin';
        const expectedAction = {
            type: types.CHANGE_DROPDOWN_PLANTS,
            value
        };
        expect(actions.changePlant(value)).be.eql(expectedAction);
    });

    it('should create an action to change poison', () => {
        const value = 'Tunin';
        const expectedAction = {
            type: types.CHANGE_DROPDOWN_POISON,
            value
        };
        expect(actions.changePoison(value)).be.eql(expectedAction);
    });

    it('should create an action to change means', () => {
        const value = 'Tunin';
        const expectedAction = {
            type: types.CHANGE_DROPDOWN_MEANS,
            value
        };

        expect(actions.changeMeans(value)).be.eql(expectedAction);
    });
});