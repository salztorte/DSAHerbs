"use strict";
import React from "react";
import List from 'material-ui/lib/lists/list';
import { Content } from "../components/index";


//TODO ordentliche "textboxen" für das impresum machen

const About = props =>(
    <Content title="About">
        <List disabled={true}>
            DSA Herps - Version 0.0
        </List>
        <List>
            Copyright © 2016 von Oliver Franzen
        </List>
        <List>
            Kontakt : <a href="mailto:salztorte92@gmail.com">salztorte92@gmail.com</a>
        </List>
    </Content>
);
About.propTypes = {};
export default About;
