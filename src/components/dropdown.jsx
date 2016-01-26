"use strict";
import React from "react";
import MenuItem from 'material-ui/lib/menus/menu-item';
import SelectField from 'material-ui/lib/select-field';

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
    return resultArr;
};


const Dorpdown = props => (
    <SelectField floatingLabelText={props.label}
                 style={{width : "100%"}}>
        {createWrapper(props.elements)}
    </SelectField>
);
//const Dorpdown = props => (
//    <SelectField value={props.value}
//                 floatingLabelText={props.label}
//                 style={props.style}
//                 onChange={props.onChange}>
//        {createWrapper(props.elements)}
//    </SelectField>
//);

export default Dorpdown;