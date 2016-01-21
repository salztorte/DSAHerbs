"use strict";
import React, { Component } from "react";
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Toolbar from './toolbar.jsx';


class About extends Component {
    render(){
        return (
            <div>
                <Toolbar title="About"/>
                <List>
                    DSA Herps - Version 0.0
                </List>
                <List>
                    Copyright © 2016 von Oliver Franzen
                </List>
            </div>
        );
    }
}
;

export default About;