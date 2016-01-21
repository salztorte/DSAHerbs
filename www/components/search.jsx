"use strict";
import React, { Component } from "react";
import{ Toolbar, BaseComponent} from './tools.jsx';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { PLANTS_TYPES } from '../constans.jsx';

let createWrapper = function(wrapper,itemsJson){
    let resultArr = [];
    for(var item in itemsJson){
        let ele = React.createElement(wrapper, {
            key : item,
            primaryText : item,
            value : item
        });
        resultArr.push(ele);
    };
    return resultArr;
};

class Search extends BaseComponent {
    constructor(props){
        super(props);
        this.state = {plantValue : null};
        this._bind("_handleChange");
    }

    _handleChange(event, index, value){
        this.setState({"plantValue":value});
    }

    render(){
        return (
            <div>
                <Toolbar title="DSAHerps"/>
                <SelectField value={this.state.plantValue} onChange={this._handleChange} floatingLabelText="Pflanzenauswahl">
                    {createWrapper(MenuItem, PLANTS_TYPES)}
                </SelectField>
            </div>
        );
    }

};


export default Search;