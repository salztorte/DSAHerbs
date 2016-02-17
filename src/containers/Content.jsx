import React, { PropTypes } from 'react';
import { routeActions } from 'react-router-redux';

import Toolbar  from '../components/Toolbar.jsx';
import { connector } from '../tools';



let Content = props =>{
    const { routeActions, children, path } = props;
    return (<div>
        <Toolbar path={path} routeActions={routeActions}/>
        <div style={{marginLeft : 20,marginRight : 20}}>
            {children}
        </div>
    </div>);
};

Content.propTypes = {
    routeActions : PropTypes.object.isRequired,
    path : PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    path : state.routing.location.pathname
});

const actionList = {
    routeActions : routeActions
};

export default connector(mapStateToProps, actionList)(Content);