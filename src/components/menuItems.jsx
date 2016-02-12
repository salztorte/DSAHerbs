import React,{ PropTypes } from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';

//const MenuItems = (props) => (
//    <div>
//        <MenuItem key="Search" primaryText="Search" onClick={() => {routing.push('/');}}/>
//        <MenuItem key="About" primaryText="About" onClick={() => {routing.push('/about');}}/>
//    </div>
//);

const MenuItems = (props) => (
    <div>
        <MenuItem key="Search" primaryText="Search" onClick={() => {props.routing.push('/');}}/>
        <MenuItem key="About" primaryText="About" onClick={() => {props.routing.push('/about');}}/>
    </div>
);

MenuItems.propTypes = {
    routing: PropTypes.object.isRequired
};

export default MenuItems;