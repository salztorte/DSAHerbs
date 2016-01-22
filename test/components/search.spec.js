"use strict";
import expect from "expect";
import React from "react";
import TestUtils from "react-addons-test-utils";
import Search from "../../src/components/search.jsx";


function setup() {
    const actions = {
        handlePlantChange: expect.createSpy(),
        handlePosionChange: expect.createSpy(),
        handleMeansChange: expect.createSpy()
    }
    const component = TestUtils.renderIntoDocument(<Search />)
    return {
        component: component,
        actions: actions,
        selectFields: TestUtils.scryRenderedDOMComponentsWithTag(component, "SelectField"),
    }
}

it('first button should call increment', () => {
    const { selectFields, actions } = setup();
    selectFields[0].value =
    TestUtils.Simulate.change(selectFields[0])
    //expect(actions.increment).toHaveBeenCalled()
})