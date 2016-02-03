"use strict";
import React, {PropTypes} from "react";
import { Toolbar } from '../components/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
const mapDispatchToProps = (dispatch) =>({
    routing: bindActionCreators(routeActions, dispatch)
});
const mapStateToProps = (state) => ({
    path: state.routing.location.pathname
});

export default connect(mapStateToProps,mapDispatchToProps)(Content);