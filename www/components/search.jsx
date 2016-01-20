"use strict";
import React, { Component } from "react";
import MyToolbar from './toolbar.jsx';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { PLANTS_TYPES } from '../constans.jsx';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {value : PLANTS_TYPES.Nutzpflanze};
    }
    render(){
        return (
            <div>
                <MyToolbar title="DSAHerps"/>
                <DropDownMenu value={this.state.value} autoWidth={true}>
                    <MenuItem value={PLANTS_TYPES.Nutzpflanze} primaryText={PLANTS_TYPES.Nutzpflanze}/>
                    <MenuItem value={PLANTS_TYPES.Heilpflanze} primaryText={PLANTS_TYPES.Heilpflanze}/>
                    <MenuItem value={PLANTS_TYPES.Giftplanze} primaryText={PLANTS_TYPES.Giftplanze}/>
                    <MenuItem value={PLANTS_TYPES.Himmlischepflanze} primaryText={PLANTS_TYPES.Himmlischepflanze}/>
                </DropDownMenu>
            </div>
        );
    }

}
;

export default Search;