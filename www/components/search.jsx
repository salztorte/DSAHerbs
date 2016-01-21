"use strict";
import React, { Component } from "react";
import Toolbar from './toolbar.jsx';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { PLANTS_TYPES,TEST } from '../constans.jsx';

let createWrapper = function(wrapper,itemsJson){
    let resultArr = [];
    for(var item in itemsJson){
        let ele = React.createElement(wrapper, {
            key : item,
            data : item
        });
        resultArr.push(ele);
    };
    return resultArr;
};


class MenuItemWrapper extends Component {
    render (){
        return <MenuItem value={this.props.data} primaryText={this.props.data}/>;

    }
};


class Search extends Component {
    constructor(props){
        super(props);
        this.state = {plantValue : PLANTS_TYPES.Nutzpflanze};
    }

    render(){
        return (
            <div>
                <Toolbar title="DSAHerps"/>
                <SelectField value={this.state.plantValue}>
                    {createWrapper(MenuItemWrapper, PLANTS_TYPES)}
                </SelectField>
            </div>
        );
    }

}
;

export default Search;