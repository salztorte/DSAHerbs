import React from 'react';

import List from 'material-ui/lib/lists/list';

//import Content from './Content.jsx';


//TODO ordentliche 'textboxen' für das impresum machen
const About = () =>(
    <div>
        <List>
            DSA Herps - Version 0.0
        </List>
        <List>
            Copyright © 2016 von Oliver Franzen
        </List>
        <List>
            Kontakt : <a href='mailto:salztorte92@gmail.com'>salztorte92@gmail.com</a>
        </List>
    </div>
);
About.propTypes = {};


//<Content></Content>

export default About;
