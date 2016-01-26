"use strict";
import React from "react";
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link} from 'react-router';

let style = {
    'horizontal' : 'right',
    'vertical' : 'top'
};


const menuIcon = <IconButton><MoreVertIcon /></IconButton>;
const menuItems = [
    <Link to="/"><MenuItem primaryText="Search"/></Link>,
    <Link to="/about"><MenuItem primaryText="About"/></Link>
];

const ContextMenu = <IconMenu iconButtonElement={menuIcon} targetOrigin={style} anchorOrigin={style}>
    {menuItems}
</IconMenu>


const Toolbar = props => (
    <AppBar
        title={props.title}
        showMenuIconButton={false}
        iconElementRight={ContextMenu}
    />
);

const Content = props => (
    <div>
        <Toolbar title={props.title} menu={props.menu}/>
        <div style={{marginLeft : 20,marginRight : 20}}>
            {props.children}
        </div>
    </div>
);

export { Content, Toolbar };