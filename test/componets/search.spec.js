//TODO

//"use strict";
//import expect from 'expect'
//import React from 'react'
//import TestUtils from 'react-addons-test-utils'
//import Search from '../../src/components/search.jsx'
//
//
//let setup = function(){
//    const actions = {
//        clickSearch : expect.createSpy()
//    }
//    const component = TestUtils.renderIntoDocument(<Search />)
//    return {
//        component : component,
//        actions : actions,
//        buttons : TestUtils.scryRenderedDOMComponentsWithTag(component, 'button'),
//    }
//};
//
//describe('Search component', () =>{
//    it('the seatrch button should Call clickSearch ', () =>{
//        const { buttons, actions } = setup();
//        TestUtils.Simulate.click(buttons[0]);
//        expect(actions.clickSearch).toHaveBeenCalled();
//    })
//
//});