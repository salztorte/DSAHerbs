import React from 'react';

import expect from 'expect';

import Dropdown from '../../src/components/dropdown.jsx';
import TestUtils from 'react-addons-test-utils';

import MenuItem from 'material-ui/lib/menus/menu-item';

const setup = ()=> {
    const props = {
        label: 'Test',
        elements: {'Das': 'Das', 'ist': 'ist', 'ein': 'ein', 'Test': 'Test'},
        onChange: expect.createSpy()
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<Dropdown {...props} />);
    let output = renderer.getRenderOutput();

    return {props, output, renderer};

};

describe('components', () => {
    describe('Dropdown', () => {

        it('should render correctly', ()=> {
            const { output, props } = setup();

            expect(output.type.displayName).toBe('SelectField');
            expect(output.props.children.length).toBe(Object.keys(props.elements).length + 1);

            expect(output.props.children[1].type.displayName).toBe('MenuItem');
            expect(output.props.children[1].props.primaryText).toBe('Das');

        });

        it('should call the onChange methode with value', () => {
            const { output, props } = setup();

            output.props.onChange(null, null, 'Tunin');
            expect(props.onChange).toHaveBeenCalledWith('Tunin');
        });

    });
});
