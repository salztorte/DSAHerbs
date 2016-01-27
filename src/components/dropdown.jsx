"use strict";
import React from "react";
import MenuItem from 'material-ui/lib/menus/menu-item';
import SelectField from 'material-ui/lib/select-field';

let createWrapper = function(itemsJson){
    let resultArr = [];
    resultArr.push(<MenuItem primaryText="-" label=" " key=" " value={null}/>);
    for(var item in itemsJson){
        resultArr.push(<MenuItem primaryText={item} key={item} value={item}/>);
    }
    return resultArr;
};

const Dropdown = props =>{
    let onChange = function(event, index, value){
        props.onChange(props.label, value);
    };

    return (
        <SelectField floatingLabelText={props.label}
                     style={{width : "100%"}}
                     value={props.value}>
            {createWrapper(props.elements)}
        </SelectField>
    );
};
Dropdown.propTypes = {
    label : React.PropTypes.string.isRequired,
    elements : React.PropTypes.objectOf(React.PropTypes.string)
};

export default Dropdown;