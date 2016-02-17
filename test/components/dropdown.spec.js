import chai, { expect }from 'chai';
import spies from 'chai-spies';
chai.use(spies);

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Dropdown, { createWrapper } from '../../src/components/dropdown.jsx';

const setup = ()=> {
    const props = {
        label: 'Test',
        elements: {'Das': 'Das', 'ist': 'ist', 'ein': 'ein', 'Test': 'Test'},
        onChange: chai.spy()
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<Dropdown {...props} />);
    let output = renderer.getRenderOutput();

    return {props, output, renderer};

};


describe('Dropdown', () => {

    it('should render correctly', ()=> {
        const { output, props } = setup();

        expect(output.type.displayName).be.equal('SelectField');
        expect(output.props.children.length).be.equal(Object.keys(props.elements).length + 1);

        expect(output.props.children[1].type.displayName).be.equal('MenuItem');
        expect(output.props.children[1].props.primaryText).be.equal('Das');

    });

    it('should call the onChange methode with value', () => {
        const { output, props } = setup();

        output.props.onChange(null, null, 'Tunin');
        expect(props.onChange).have.been.called.with('Tunin');
    });


    it('should create the items correct', () => {
        const wrapper = createWrapper({1:1,2:2,3:3});
        expect(wrapper).have.length(4);

        expect(wrapper[0].type.displayName).be.equal('MenuItem');
        expect(wrapper[0].props.primaryText).be.equal('-');
        expect(wrapper[0].props.value).be.null;

        expect(wrapper[1].type.displayName).be.equal('MenuItem');
        expect(wrapper[1].props.primaryText).be.equal('1');
        expect(wrapper[1].props.value).be.equal('1');

        expect(wrapper[2].type.displayName).be.equal('MenuItem');
        expect(wrapper[2].props.primaryText).be.equal('2');
        expect(wrapper[2].props.value).be.equal('2');

        expect(wrapper[3].type.displayName).be.equal('MenuItem');
        expect(wrapper[3].props.primaryText).be.equal('3');
        expect(wrapper[3].props.value).be.equal('3');

    });
});
