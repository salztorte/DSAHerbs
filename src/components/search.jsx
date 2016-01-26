"use strict";
import React from "react";
import{  Content, Dorpdown } from './tools.jsx';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import { PLANTS_TYPES, POISON_TYPES, MEANS_TYPES } from '../config/constans.jsx';

let style = {
    width : "100%"
}

let Search = React.createClass(
    {
        "getInitialState" : function(){
            return {
                value : {
                    "plant" : null,
                    "poison" : null,
                    "means" : null,
                    "others" : null
                }
            };
        },

        "_handlePlantChange" : function(event, index, value){
            this._updateState("plant", value);
        },

        "_handlePosionChange" : function(event, index, value){
            this._updateState("poison", value);
        },

        "_handleMeansChange" : function(event, index, value){
            this._updateState("means", value);
        },

        "_updateState" : function(name, value){
            let newState = this.state;
            newState.value[name] = value
            this.setState(newState);
        },
        "_clickSearch" : function(event){
            console.log(event);
            console.log(this.state);
        },
        "render" : function(){
            var values = this.state.value
            return (
                <Content title="DSAHerps">
                    <Dorpdown elements={PLANTS_TYPES}
                              value={values.plant}
                              onChange={this._handlePlantChange}
                              label="Pflanzenauswahl"
                              style={style}/>

                    <Dorpdown elements={POISON_TYPES}
                              value={values.poison}
                              onChange={this._handlePosionChange}
                              label="Giftauswahl"
                              style={style}/>

                    <Dorpdown elements={MEANS_TYPES}
                              value={values.means}
                              onChange={this._handleMeansChange}
                              label="Mittelauswahl"
                              style={style}/>
                    <RaisedButton label="Suche starten" primary={true} style={style} onClick={this._clickSearch}/>
                </Content>
            );
        },

    });


export default Search;