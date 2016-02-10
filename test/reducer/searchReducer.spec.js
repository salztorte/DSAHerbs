import expect from 'expect';
import reducer from '../../src/reducers/searchReducer';
import {SELECT_ACTION as types} from '../../src/config/constans';


describe('todos reducer', () =>{
    it('should return the initial state', () =>{
        expect(
            reducer(undefined, {})
        ).toEqual({
                      'plant' : null,
                      'poison' : null,
                      'means' : null
                  });
    })

    it('should handle dropdown changes', () =>{
        expect(reducer(undefined, {
            type : types.CHANGE_DROPDOWN_PLANTS,
            value : 'tunin'
        }))
            .toEqual({
                         'plant' : 'tunin',
                         'poison' : null,
                         'means' : null
                     });

        expect(reducer(undefined, {
            type : types.CHANGE_DROPDOWN_POISON,
            value : 'tunin'
        }))
            .toEqual({
                        'plant' : null,
                        'poison' : 'tunin',
                        'means' : null
                    });


        expect(reducer(undefined, {
            type : types.CHANGE_DROPDOWN_MEANS,
            value : 'tunin'
        }))
            .toEqual({
                        'plant' : null,
                        'poison' : null,
                        'means' : 'tunin'
                    });
    });

});