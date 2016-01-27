"use strict";
import React from "react";
import{  Content } from './toolbar.jsx';
import Dropdown from './dropdown.jsx';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import { PLANTS_TYPES, POISON_TYPES, MEANS_TYPES } from '../config/constans.jsx';

const Search = props =>{
    return (<Content title="DSAHerps">
        <Dropdown elements={PLANTS_TYPES}
                  label={"Pflanzenauswahl"}
                  value={""}/>


        <RaisedButton label="Suche starten" primary={true} style={{width : "100%"}}/>
    </Content>)
};
Search.propTypes = {};
export default Search;

//<Dropdown elements={POISON_TYPES}
//          label={"Giftauswahl"}/>
//
//<Dropdown elements={MEANS_TYPES}
//          label={"Mittelauswahl"}/>