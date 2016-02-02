"use strict";
import React from "react";
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link} from 'react-router';
import { routeActions } from 'react-router-redux'

let style = {
    'horizontal': 'right',
    'vertical': 'top'
};

const Toolbar = (props, dispatch) => {
    const menuIcon = <IconButton><MoreVertIcon /></IconButton>;
    const menuItems = [
        <MenuItem key="Search" primaryText="Search" onClick={() => dispatch(routeActions.push('/'))}/>,
        <MenuItem key="About" primaryText="About" onClick={() => dispatch(routeActions.push('/about'))}/>
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
Toolbar.propTypes = {
    title: React.PropTypes.string.isRequired,
}


const Content = props => (
    <div>
        <Toolbar title={props.title}/>
        <div style={{marginLeft : 20,marginRight : 20}}>
            {props.children}
        </div>
    </div>
);
Content.propTypes = {
    title: React.PropTypes.string.isRequired
}

export { Content, Toolbar };