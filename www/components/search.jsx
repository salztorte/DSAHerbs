"use strict";
import React, { Component } from "react";
import{ Toolbar, BaseComponent} from './tools.jsx';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { PLANTS_TYPES } from '../constans.jsx';

let createWrapper = function(itemsJson){
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
    ;
    return resultArr;
};

class Search extends BaseComponent {
    constructor(props){
        super(props);
        let initValue = {
            value : {
                "plant" : null,
                "poison" : null,
                "means" : null,
                "others" : null
            }
        }
        this.state = initValue;
        this._bind("_handleChange", "_updateState");
    }

    _handleChange(event, index, value){
        this._updateState("plant", value);
    }

    _updateState(name, value){
        let newState = this.state;
        newState.value[name] = value
        this.setState(newState);
    }

    render(){
        return (
            <div>
                <Toolbar title="DSAHerps"/>
                <SelectField value={this.state.value.plant} onChange={this._handleChange}
                             floatingLabelText="Pflanzenauswahl">
                    {createWrapper(PLANTS_TYPES)}
                </SelectField>
            </div>
        );
    }

}
;


export default Search;