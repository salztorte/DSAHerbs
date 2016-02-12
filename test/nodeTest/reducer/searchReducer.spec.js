import { should }from 'chai';
should();
import reducer from '../../../src/reducers/searchReducer';
import {SELECT_ACTION as types} from '../../../src/config/constans';


describe('todos reducer', () => {
    it('should return the initial state', () => {

        reducer(undefined, {}).should.to.eql({
            'plant': null,
            'poison': null,
            'means': null
        });
    });

    it('should handle dropdown changes', () => {

        reducer(undefined, {
            type: types.CHANGE_DROPDOWN_PLANTS,
            value: 'tunin'
        }).should.be.eql({
            'plant': 'tunin',
            'poison': null,
            'means': null
        });


        reducer(undefined, {
            type: types.CHANGE_DROPDOWN_POISON,
            value: 'tunin'
        }).should.be.eql({
            'plant': null,
            'poison': 'tunin',
            'means': null
        });

        reducer(undefined, {
            type: types.CHANGE_DROPDOWN_MEANS,
            value: 'tunin'
        }).should.be.eql({
            'plant': null,
            'poison': null,
            'means': 'tunin'
        });
    });
});