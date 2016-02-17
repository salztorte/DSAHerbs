import React,{ PropTypes } from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';

let MenuItems = (props) => (
    <div>
        <MenuItem key="Search" primaryText="Search" onClick={() => {props.routeActions.push('/');}}/>
        <MenuItem key="About" primaryText="About" onClick={() => {props.routeActions.push('/about');}}/>
    </div>
);

MenuItems.propTypes = {
    routeActions: PropTypes.object.isRequired
};

export default MenuItems;