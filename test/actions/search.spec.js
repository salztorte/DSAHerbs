import { expect }from 'chai';
import * as actions from '../../src/actions/search';

import { SEARCH_ACTION }from '../../src/config/constans';

describe('select action', () => {
    it('should return the correct', () => {
        let seachPara = {
            'Name' : 'Alr'
        };

        const expectedAction = {
            type: SEARCH_ACTION,
            seachPara
        };
        expect(actions.doSearch(seachPara)).eql(expectedAction);
    });
});
