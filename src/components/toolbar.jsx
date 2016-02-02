"use strict";
import React from "react";
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';


let style = {
    'horizontal': 'right',
    'vertical': 'top'
};

const ToolbarTmp = (props) => {
    //const { action } = props;
    //console.log(action);
    const menuIcon = <IconButton><MoreVertIcon /></IconButton>;
    const menuItems = [
        <MenuItem key="Search" primaryText="Search"/>,
        <MenuItem key="About" primaryText="About"/>
        //<MenuItem key="Search" primaryText="Search" onClick={() => action.push('/')}/>,
        //<MenuItem key="About" primaryText="About" onClick={() => action.push('/about')}/>
    ];
    const ContextMenu = <IconMenu iconButtonElement={menuIcon} targetOrigin={style} anchorOrigin={style}>
        {menuItems}
    </IconMenu>

    return (<AppBar
            title={props.title}
            showMenuIconButton={false}
            iconElementRight={ContextMenu}
        />
    )
};

ToolbarTmp.propTypes = {
    title: React.PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) =>{
    console.log(JSON.stringify(routeActions));
  return  ({
        actions: bindActionCreators(routeActions, dispatch)
    });
};

const Toolbar = connect(mapDispatchToProps)(ToolbarTmp);
//const Toolbar = ToolbarTmp;


const Content = props => (<div>
    <ToolbarTmp title={props.title}/>
    <div style={{marginLeft : 20,marginRight : 20}}>
        {props.children}
    </div>
</div>);
Content.propTypes = {
    title: React.PropTypes.string.isRequired
};

export { Content, Toolbar };