import chai, { should }from 'chai';
import spies from 'chai-spies';
chai.use(spies);
should();

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import MenuItem from '../../src/components/menuItems.jsx';

const setup = ()=> {
    let props = {
        routing: {
            push: chai.spy()
        }
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<MenuItem {...props} />);
    let output = renderer.getRenderOutput();

    return {props, output, renderer};
};


describe('MenuItems', () => {
    it('should render correctly', () => {
        const { output } = setup();

        const childrenElements = output.props.children;
        childrenElements.should.have.length(2);

        childrenElements[0].type.displayName.should.be.equal('MenuItem');
        childrenElements[0].props.primaryText.should.be.equal('Search');

        childrenElements[1].type.displayName.should.be.equal('MenuItem');
        childrenElements[1].props.primaryText.should.be.equal('About')
    });

    it('should call the routing Methode', () => {
        const { output, props } = setup();

        const childrenElements = output.props.children;

        childrenElements[0].props.onClick();
        props.routing.push.should.have.been.called.with('/');

        childrenElements[1].props.onClick();
        props.routing.push.should.have.been.called.with('/about');

    });
});