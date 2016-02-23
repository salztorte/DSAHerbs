import { expect }from 'chai';

import reducer from '../../src/reducers/searchReducer';
import {SEARCH_ACTION} from '../../src/config/constans';


describe('select reducer', () => {
    it('should return the initial state', () => {

        expect(reducer(undefined, {})).to.eql({});
    });

    it('should handle search requests', () => {
        let seachPara = {
            'Name' : 'Alr'
        };
        expect(reducer(undefined,{
            type : SEARCH_ACTION,
            seachPara
        })).have.length(3);
    });

});