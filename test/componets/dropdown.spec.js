import chai, { should }from 'chai';
import spies from 'chai-spies';
chai.use(spies);
should();

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Dropdown from '../../src/components/dropdown.jsx';

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

            output.type.displayName.should.be.equal('SelectField');
            output.props.children.length.should.be.equal(Object.keys(props.elements).length + 1);

            output.props.children[1].type.displayName.should.be.equal('MenuItem');
            output.props.children[1].props.primaryText.should.be.equal('Das');

        });

        it('should call the onChange methode with value', () => {
            const { output, props } = setup();

            output.props.onChange(null, null, 'Tunin');
            props.onChange.should.have.been.called.with('Tunin');
        });

    });
