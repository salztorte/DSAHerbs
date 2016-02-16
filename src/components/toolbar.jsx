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

const MenuIcon = (<IconButton><MoreVertIcon /></IconButton>);


let Toolbar = (props) => {
    const { routing, title } = props;

    const ContextMenu = (
        <IconMenu iconButtonElement={MenuIcon} targetOrigin={style} anchorOrigin={style}>
            <MenuItems routing={routing}/>
        </IconMenu>
    );

    return (<AppBar title={title} showMenuIconButton={false} iconElementRight={ContextMenu}/>);
};

Toolbar.propTypes = {
    title: PropTypes.string.isRequired,
    routing: PropTypes.object.isRequired
};

export default Toolbar;
