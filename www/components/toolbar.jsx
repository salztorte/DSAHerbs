"use strict";
import React, { Component } from "react";
//import Toolbar from 'material-ui/lib/toolbar/toolbar';
//import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
//import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
//import IconMenu from 'material-ui/lib/menus/icon-menu';
//import IconButton from 'material-ui/lib/icon-button';
//import MenuItem from 'material-ui/lib/menus/menu-item';
//import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';


import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router';




class Toolbar extends Component {
    render(){
        return (
            <AppBar
                title={this.props.title}
                showMenuIconButton= {false}
                iconElementRight={
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                            <Link to="/about"><MenuItem primaryText="About"/></Link>
                    </IconMenu>
                }
            />
        );
    }
}

//class MyToolbar extends Component {
//    render(){
//        return (
//            <Toolbar>
//                <ToolbarGroup firstChild={true} float="left">
//                    <ToolbarTitle text={this.props.title}/>
//                </ToolbarGroup>
//                <ToolbarGroup float="right">
//                    <IconMenu iconButtonElement={            <IconButton touch={true}>
//                <NavigationMenu />
//            </IconButton>}>
//                        <Link to="/about"><MenuItem primaryText="About"/></Link>
//                    </IconMenu>
//                </ToolbarGroup>
//            </Toolbar>
//        );
//    }
//}


export default Toolbar;