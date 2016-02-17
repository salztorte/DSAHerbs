import { expect }from 'chai';

import reducer from '../../src/reducers/selectReducer';
import {SELECT_ACTION as types} from '../../src/config/constans';


describe('select reducer', () => {
    it('should return the initial state', () => {

        expect(reducer(undefined, {})).to.eql({
            'plant': null,
            'poison': null,
            'means': null
        });
    });

    it('should handle dropdown changes', () => {

        expect(reducer(undefined, {
            type: types.CHANGE_DROPDOWN_PLANTS,
            value: 'tunin'
        })).be.eql({
            'plant': 'tunin',
            'poison': null,
            'means': null
        });


        expect(reducer(undefined, {
            type: types.CHANGE_DROPDOWN_POISON,
            value: 'tunin'
        })).be.eql({
            'plant': null,
            'poison': 'tunin',
            'means': null
        });

        expect(reducer(undefined, {
            type: types.CHANGE_DROPDOWN_MEANS,
            value: 'tunin'
        })).be.eql({
            'plant': null,
            'poison': null,
            'means': 'tunin'
        });
    });
});