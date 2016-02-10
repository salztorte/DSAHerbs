import React, {PropTypes} from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SelectField from 'material-ui/lib/select-field';

let createWrapper = function (itemsJson) {
    let resultArr = [];
    resultArr.push(<MenuItem primaryText="-" label=" "  key=" " value={null}/>);
    for (var item in itemsJson) {
        resultArr.push(<MenuItem primaryText={item} key={item} value={item}/>);
    }
    return resultArr;
};

const Dropdown = props =>(
    <SelectField floatingLabelText={props.label}
                 style={{width : '100%'}}
                 value={props.value}
                 onChange={(event, index, value)=> props.onChange(value)}>
        {createWrapper(props.elements)}
    </SelectField>
);

Dropdown.propTypes = {
    label: PropTypes.string.isRequired,
    elements: PropTypes.objectOf(React.PropTypes.string),
    onChange: PropTypes.func.isRequired
};

export default Dropdown;