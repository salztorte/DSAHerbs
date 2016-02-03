"use strict";
import React, { PropTypes } from "react";
import{ Dropdown } from '../components/index';
import Content from './Content.jsx';
import RaisedButton from 'material-ui/lib/raised-button';
import { PLANTS_TYPES, POISON_TYPES, MEANS_TYPES } from '../config/constans.jsx';
import {SearchActions} from '../actions/index';
import { connector } from '../tools';

const Search = props => {
    const { values, actions} = props
    return (<Content>
        <Dropdown elements={PLANTS_TYPES}
                  label={"Pflanzenauswahl"}
                  value={values.plant}
                  onChange={actions.changePlant}/>
        <Dropdown elements={POISON_TYPES}
                  label={"Giftauswahl"}
                  value={values.poison}
                  onChange={actions.changePoison}/>
        <Dropdown elements={MEANS_TYPES}
                  label={"Mittelauswahl"}
                  value={values.means}
                  onChange={actions.changeMeans}/>
        <RaisedButton label="Suche starten" primary={true} style={{width : "100%"}}/>
    </Content>)
};

Search.propTypes = {
    values: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    values: state.changeDropdown.select
});

const actionList = {"actions": SearchActions}


export default connector(mapStateToProps, actionList, Search);


