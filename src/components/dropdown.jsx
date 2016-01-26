"use strict";
import React from "react";
import MenuItem from 'material-ui/lib/menus/menu-item';
import SelectField from 'material-ui/lib/select-field';

let createWrapper = function(itemsJson){
    let resultArr = [];
    resultArr.push(<MenuItem primaryText="-" label=" " key=" " value={null} />);
    for(var item in itemsJson){
        resultArr.push(<MenuItem primaryText={item} key={item} value={item} />);
    }
    return resultArr;
};


const Dropdown = props => (
    <SelectField floatingLabelText={props.label}
                 style={{width : "100%"}}>
        {createWrapper(props.elements)}
    </SelectField>
);
Dropdown.propTypes = {
    label: React.PropTypes.string.isRequired,
    elements: React.PropTypes.objectOf(React.PropTypes.string)
}



//const Dorpdown = props => (
//    <SelectField value={props.value}
//                 floatingLabelText={props.label}
//                 style={props.style}
//                 onChange={props.onChange}>
//        {createWrapper(props.elements)}
//    </SelectField>
//);

export default Dropdown;