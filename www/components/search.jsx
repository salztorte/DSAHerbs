"use strict";
import React, { Component } from "react";
import{  BaseComponent, Content} from './tools.jsx';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import { PLANTS_TYPES, POISON_TYPES } from '../constans.jsx';



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

let style = {
    width : "100%"
}

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
        this._bind("_updateState", "_handlePlantChange", "_handlePosionChange");
    }

    _handlePlantChange(event, index, value){
        this._updateState("plant", value);
    }

    _handlePosionChange(event, index, value){
        this._updateState("poison", value);
    }

    _updateState(name, value){
        let newState = this.state;
        newState.value[name] = value
        this.setState(newState);
    }

    render(){
        return (
                <Content title="DSAHerps">
                    <SelectField value={this.state.value.plant} onChange={this._handlePlantChange}
                                 floatingLabelText="Pflanzenauswahl"
                                 style={style}>
                        {createWrapper(PLANTS_TYPES)}
                    </SelectField>
                    <SelectField value={this.state.value.poison} onChange={this._handlePosionChange}
                                 floatingLabelText="Giftauswahl"
                                 style={style}>
                        {createWrapper(POISON_TYPES)}
                    </SelectField>

                    <RaisedButton label="Suche starten" primary={true} style={style}/>
                </Content>
        );
    }

}



export default Search;