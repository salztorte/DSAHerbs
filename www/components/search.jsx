"use strict";
import React, { Component } from "react";
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

class Search extends Component {
    render (){
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true} float="left">
                    <ToolbarTitle text="Options" />
                </ToolbarGroup>
            </Toolbar>
        );
    }
};



export default Search;