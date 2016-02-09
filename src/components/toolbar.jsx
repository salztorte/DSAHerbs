import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

let style = {
    'horizontal' : 'right',
    'vertical' : 'top'
};

const Toolbar = (props) =>{
    const { routing, title } = props;


    const menuIcon = (<IconButton><MoreVertIcon /></IconButton>);
    const menuItems = [
        <MenuItem key="Search" primaryText="Search"/>,
        <MenuItem key="About" primaryText="About"/>
    ];
    //const menuItems = [
    //    <MenuItem key="Search" primaryText="Search" onClick={() => {routing.push('/');}}/>,
    //    <MenuItem key="About" primaryText="About" onClick={() => {routing.push('/about');}}/>
    //];
    const ContextMenu = (<IconMenu iconButtonElement={menuIcon} targetOrigin={style} anchorOrigin={style}>
        {menuItems}
    </IconMenu>);

    return (<AppBar title={title} showMenuIconButton={false} iconElementRight={ContextMenu}/>);
};

Toolbar.propTypes = {
    title : React.PropTypes.string.isRequired,
    //routing : React.PropTypes.object.isRequired
};

export default Toolbar;
