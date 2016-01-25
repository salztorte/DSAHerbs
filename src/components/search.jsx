"use strict";
import React from "react";
import{  Content} from './tools.jsx';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import { PLANTS_TYPES, POISON_TYPES, MEANS_TYPES } from '../constans.jsx';


let createWrapper = function(itemsJson){
	let resultArr = [];
	resultArr.push(
		React.createElement(MenuItem, {
			label       : " ",
			key         : " ",
			primaryText : "-",
			value       : null

		})
	);

	for(var item in itemsJson){
		let ele = React.createElement(MenuItem, {
			key         : item,
			primaryText : item,
			value       : item
		});
		resultArr.push(ele);
	}
	;
	return resultArr;
};

let style = {
	width : "100%"
}

let Search = React.createClass(
	{
		"getInitialState": function() {
			return{
				value : {
					"plant"  : null,
					"poison" : null,
					"means"  : null,
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
		"_updateState"        : function(name, value){
			let newState = this.state;
			newState.value[name] = value
			this.setState(newState);
		},
		"_clickSearch" : function(){
			console.log(this.state);
		},
		"render"              : function(){
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
					<SelectField value={this.state.value.means} onChange={this._handleMeansChange}
								 floatingLabelText="Mittelauswahl"
								 style={style}>
						{createWrapper(MEANS_TYPES)}
					</SelectField>
					<RaisedButton label="Suche starten" primary={true} style={style} onClick={this._clickSearch}/>
				</Content>
			);
		},

	});



//class Search extends BaseComponent {
//    constructor(props){
//        super(props);
//        let initValue =
//        this.state =
//
//        this._bind("_updateState", "_handlePlantChange", "_handlePosionChange");
//    }
//}

export default Search;