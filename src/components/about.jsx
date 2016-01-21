"use strict";
import React, { Component } from "react";
import {BaseComponent , Content} from "./tools.jsx"
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import TextField from 'material-ui/lib/text-field';

class About extends BaseComponent {
    render(){
        return (
            <TextField defaultValue="" />
        );
    }
}


export default About;
//
//<Content title="About">
//        <List disabled={true}>
//            DSA Herps - Version 0.0
//        </List>
//        <List>
//            Copyright © 2016 von Oliver Franzen
//        </List>
//        <List>
//            Kontakt : <a href= "mailto:salztorte92@gmail.com">salztorte92@gmail.com</a>
//        </List>
//    </Content>