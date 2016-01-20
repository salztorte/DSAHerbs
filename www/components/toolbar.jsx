"use strict";
import React, { Component } from "react";
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';

class MenuButton extends Component {
    render(){
        return (
            <IconButton touch={true}>
                <NavigationMenu />
            </IconButton>
        )
    }
}

class MyToolbar extends Component {
    render(){
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true} float="left">
                    <ToolbarTitle text={this.props.title}/>
                </ToolbarGroup>
                <ToolbarGroup float="right">
                    <IconMenu iconButtonElement={<MenuButton />}>
                        <MenuItem primaryText="About"/>
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}
;

export default MyToolbar;