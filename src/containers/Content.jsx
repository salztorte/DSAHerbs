import React, { PropTypes } from 'react';
import { routeActions } from 'react-router-redux';

import Toolbar  from '../components/toolbar.jsx';
import { connector } from '../tools';

const getTitle = function(path){
    switch(path){
        case '/':
            return 'DSAHerps';
        case '/about':
            return 'About';
        case '/result':
            return 'Ergebnis';
    }
};

const Content = props =>{
    const { routing, children, path } = props;
    return (<div>
        <Toolbar title={getTitle(path)} routing={routing}/>
        <div style={{marginLeft : 20,marginRight : 20}}>
            {children}
        </div>
    </div>);
};

Content.propTypes = {
    routing : PropTypes.object.isRequired,
    path : PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    path : state.routing.location.pathname
});

const actionList = {
    'routing' : routeActions
};

export default connector(mapStateToProps, actionList)(Content);