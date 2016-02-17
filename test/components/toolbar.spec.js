import chai, { expect }from 'chai';
import spies from 'chai-spies';
chai.use(spies);


import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Toolbar,{ pathToTitle }from '../../src/components/toolbar.jsx';
const setup = ()=> {
    let props = {
        path: '/',
        routeActions: {
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

        expect(output.type.displayName).to.equal('AppBar');

        const iconElementRight = output.props.iconElementRight;
        expect(iconElementRight.type.displayName).equal('IconMenu');

        const iconButtonElement = iconElementRight.props.iconButtonElement;
        expect(iconButtonElement.type.displayName).be.equal('IconButton');
    });


    it('should parse the path correct', () => {
        expect(pathToTitle('/')).to.be.equal('DSAHerps');
        expect(pathToTitle('/about')).to.be.equal('About');
        expect(pathToTitle('/result')).to.be.equal('Ergebnis');
    });
});