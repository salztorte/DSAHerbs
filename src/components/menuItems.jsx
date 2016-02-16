import React,{ PropTypes } from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';

let MenuItems = (props) => (
    <div>
        <MenuItem key="Search" primaryText="Search" onClick={() => {props.routing.push('/');}}/>
        <MenuItem key="About" primaryText="About" onClick={() => {props.routing.push('/about');}}/>
    </div>
);

MenuItems.propTypes = {
    routing: PropTypes.object.isRequired
};

export default MenuItems;