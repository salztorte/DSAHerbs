"use strict";
import React, {PropTypes} from "react";
import { Toolbar } from '../components/index';
import { connector } from '../tools';
import { routeActions } from 'react-router-redux';

const getTitle = function(path){
    switch (path){
        case "/":
            return "DSAHerps";
        case "/about":
            return "About";
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
    path: state.routing.location.pathname
});

const actionList = {"routing": routeActions}

export default connector(mapStateToProps,actionList, Content);