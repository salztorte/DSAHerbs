import chai, { expect }from 'chai';
import spies from 'chai-spies';
chai.use(spies);

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import MenuItem from '../../src/components/menuItems.jsx';

const setup = ()=> {
    let props = {
        routeActions: {
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
        expect(childrenElements).have.length(2);

        expect(childrenElements[0].type.displayName).be.equal('MenuItem');
        expect(childrenElements[0].props.primaryText).be.equal('Search');

        expect(childrenElements[1].type.displayName).be.equal('MenuItem');
        expect(childrenElements[1].props.primaryText).be.equal('About');
    });

    it('should call the routing Methode', () => {
        const { output, props } = setup();

        const childrenElements = output.props.children;

        childrenElements[0].props.onClick();
        expect(props.routeActions.push).have.been.called.with('/');

        childrenElements[1].props.onClick();
        expect(props.routeActions.push).have.been.called.with('/about');

    });
});