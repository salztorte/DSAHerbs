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
        buttons: TestUtils.scryRenderedDOMComponentsWithTag(component, "button"),
        p: TestUtils.findRenderedDOMComponentWithTag(component, "p")
    }
}