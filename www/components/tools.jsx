
"use strict";
import React, { Component } from "react";
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router';


export class BaseComponent extends React.Component {
    _bind(...methods){
        methods.forEach((method) => this[method] = this[method].bind(this));
    }
}

export class Toolbar extends BaseComponent {
    constructor(props){
        super(props);
        this._bind();

    }


    render(){
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
}



export class Content extends Component {

    render(){
        return (
            <div>
                <Toolbar title={this.props.title} menu={this.props.menu} />
                <div style={{marginLeft : 20,marginRight : 20}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
;