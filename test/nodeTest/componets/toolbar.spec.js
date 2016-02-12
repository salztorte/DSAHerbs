import chai, { should }from 'chai';
import spies from 'chai-spies';
chai.use(spies);
should();

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Toolbar from '../../../src/components/toolbar.jsx';
import MenuItems from '../../../src/components/menuItems.jsx';
const setup = ()=> {
    let props = {
        title: 'Test',
        routing: {
            push: chai.spy()
        }
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<Toolbar {...props} />);
    let output = renderer.getRenderOutput();

    return {props, output, renderer};
};


describe('Toolbar', () => {
    it('should render correctly', () => {
        const { output } = setup();

        output.type.displayName.should.to.equal('AppBar');

        const iconElementRight = output.props.iconElementRight;
        iconElementRight.type.displayName.should.equal('IconMenu');


        const iconButtonElement = iconElementRight.props.iconButtonElement;
        iconButtonElement.type.displayName.should.be.equal('IconButton');
    });
});