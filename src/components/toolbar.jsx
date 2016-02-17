import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

import MenuItems from './menuItems.jsx';

let style = {
    'horizontal': 'right',
    'vertical': 'top'
};

const ContextMenu = routeActions =>(
    <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>} targetOrigin={style} anchorOrigin={style}>
        <MenuItems routeActions={routeActions}/>
    </IconMenu>
);

export const pathToTitle = path =>{
    switch(path){
        case '/':
            return 'DSAHerps';
        case '/about':
            return 'About';
        case '/result':
            return 'Ergebnis';
    }
};


let Toolbar = props =>(
    <AppBar title={pathToTitle(props.path)} showMenuIconButton={false} iconElementRight={ContextMenu(props.routeActions)}/>);


Toolbar.propTypes = {
    path: PropTypes.string.isRequired,
    routeActions: PropTypes.object.isRequired
};

export default Toolbar;
