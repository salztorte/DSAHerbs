"use strict";
import React, { Component } from "react";
import {BaseComponent , Content} from "./tools.jsx"
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';


class About extends BaseComponent {
    render(){
        return (
            <Content title="About">
                <List>
                    DSA Herps - Version 0.0
                </List>
                <List>
                    Copyright © 2016 von Oliver Franzen
                </List>
            </Content>
        );
    }
}


export default About;