import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Toolbar from '../../src/components/toolbar.jsx';

const setup = ()=> {
    let props = {
        title: 'Test',
        routing: {
            push: expect.createSpy()
        }
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<Toolbar {...props} />);
    let output = renderer.getRenderOutput();

    return {props, output, renderer};
};


describe('components', () => {

    describe('Toolbar', () => {
        it('should render correctly', () => {
            const { output } = setup();

            expect(output.type.displayName).toBe('AppBar');

            const iconElementRight = output.props.iconElementRight;
            expect(iconElementRight.type.displayName).toBe('IconMenu');
            expect(iconElementRight.props.children.length).toBe(2);

            const iconButtonElement = iconElementRight.props.iconButtonElement;
            expect(iconButtonElement.type.displayName).toBe('IconButton');
        });


        it('should call reouting.push if click on one item', () => {
            const { output, props } = setup();
            const menuItems = output.props.iconElementRight.props.children;

            menuItems[0].props.onClick();
            expect(props.routing.push).toHaveBeenCalledWith('/');
            menuItems[1].props.onClick();
            expect(props.routing.push).toHaveBeenCalledWith('/about');
        });

    });

});