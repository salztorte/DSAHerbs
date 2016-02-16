import chai, { should }from 'chai';
import spies from 'chai-spies';
chai.use(spies);
should();

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import App from '../../src/containers/App.jsx';

const setup = ()=> {
    let renderer = TestUtils.createRenderer();
    renderer.render(<App/>);
    let output = renderer.getRenderOutput();

    return {output, renderer};
};


describe('App Container', () => {
    it('should render correctly', () => {
        const { output } = setup();

        output.type.displayName.should.be.equal('Router');
        output.props.children.length.should.be.equal(3);


        let seachRoute= output.props.children[0];
        seachRoute.type.displayName.should.be.equal('Route');
        seachRoute.props.path.should.be.equal('/');
        seachRoute.props.component.displayName.should.be.equal('Connect(Search)');


        let aboutRoute = output.props.children[1];
        aboutRoute.type.displayName.should.be.equal('Route');
        aboutRoute.props.path.should.be.equal('/about');
        aboutRoute.props.component.displayName.should.be.equal('Connect(About)');

        let resultRoute = output.props.children[2];
        resultRoute.type.displayName.should.be.equal('Route');
        resultRoute.props.path.should.be.equal('/result');
        resultRoute.props.component.displayName.should.be.equal('Connect(SearchResults)');

    });

});