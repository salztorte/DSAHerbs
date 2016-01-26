"use strict";
import React from "react";
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SelectField from 'material-ui/lib/select-field';
import { Link} from 'react-router';


export let Dorpdown = React.createClass(
    {
        "render" : function(){
            let _createWrapper = function(itemsJson){
                let resultArr = [];
                resultArr.push(
                    React.createElement(MenuItem, {
                        label : " ",
                        key : " ",
                        primaryText : "-",
                        value : null
                    })
                );

                for(var item in itemsJson){
                    let ele = React.createElement(MenuItem, {
                        key : item,
                        primaryText : item,
                        value : item
                    });
                    resultArr.push(ele);
                }
                return resultArr;
            };
            return (
                <SelectField value={this.props.value}
                             floatingLabelText={this.props.label}
                             style={this.props.style}
                             onChange={this.props.onChange}>
                    {_createWrapper(this.props.elements)}
                </SelectField>)
        }
    });

export let Toolbar = React.createClass(
    {
        "style" : {
            'horizontal' : 'right',
            'vertical' : 'top'
        },
        "render" : function(){
                return (
                    <AppBar
                        title={this.props.title}
                        showMenuIconButton={false}
                        iconElementRight={
                            <IconMenu
                                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                targetOrigin={this.style}
                                anchorOrigin={this.style}
                                >
                                    <Link to="/"><MenuItem primaryText="Search"/></Link>
                                    <Link to="/about"><MenuItem primaryText="About"/></Link>
                            </IconMenu>
                        }
                    />
                );
        }
    });

export let Content = React.createClass(
    {
        "render" : function(){
            console.log(this.props.children);
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