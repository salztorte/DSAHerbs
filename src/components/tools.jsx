
"use strict";
import React, { Component } from "react";
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router';



let Toolbar = React.createClass(
    {
        "render" : function(){
                return (
                    <AppBar
                        title={this.props.title}
                        showMenuIconButton={false}
                        iconElementRight={
                            <IconMenu
                                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                >
                                    <Link to="/about"><MenuItem primaryText="About"/></Link>
                            </IconMenu>
                        }
                    />
                );
        }
    });

let Content = React.createClass(
    {
        "render" : function(){
            return (
                <div>
                    <Toolbar title={this.props.title} menu={this.props.menu} />
                    <div style={{marginLeft : 20,marginRight : 20}}>
                        {this.props.children}
                    </div>
                </div>
            )
        }
    });


export { Toolbar, Content };

