import chai, { expect }from 'chai';
import spies from 'chai-spies';
chai.use(spies);

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import App from '../../src/components/App.jsx';

const setup = ()=> {
    let renderer = TestUtils.createRenderer();
    renderer.render(<App/>);
    let output = renderer.getRenderOutput();

    return {output, renderer};
};


describe('App Container', () => {
    it('should render correctly', () => {
        const { output } = setup();

        expect(output.type.displayName).be.equal('Router');
        expect(output.props.children.length).be.equal(3);


        let seachRoute= output.props.children[0];
        expect(seachRoute.type.displayName).be.equal('Route');
        expect(seachRoute.props.path).be.equal('/');
        expect(seachRoute.props.component.displayName).be.equal('Connect(Search)');


        let aboutRoute = output.props.children[1];
        expect(aboutRoute.type.displayName).be.equal('Route');
        expect(aboutRoute.props.path).be.equal('/about');
        expect(aboutRoute.props.component.displayName).be.equal('Connect(About)');

        let resultRoute = output.props.children[2];
        expect(resultRoute.type.displayName).be.equal('Route');
        expect(resultRoute.props.path).be.equal('/result');
        expect(resultRoute.props.component.displayName).be.equal('Connect(SearchResults)');

    });

});