import React from 'react';

import List from 'material-ui/lib/lists/list';

import Content from './Content.jsx';
import { connector } from '../tools';

const getTitle = function(path){
    switch(path){
        case '/':
            return 'DSAHerps';
        case '/about':
            return 'About';
        case '/result':
            return 'Ergebnis';
    }
};


//TODO ordentliche 'textboxen' für das impresum machen
let About = () =>(
    <Content>
        <List>
            DSA Herps - Version 0.0
        </List>
        <List>
            Copyright © 2016 von Oliver Franzen
        </List>
        <List>
            Kontakt : <a href='mailto:salztorte92@gmail.com'>salztorte92@gmail.com</a>
        </List>
    </Content>
);
About.propTypes = {};

const mapStateToProps = (state) => ({});

const actionList = {};

export default connector(mapStateToProps, actionList)(About);
