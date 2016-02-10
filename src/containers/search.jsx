import React, { PropTypes } from 'react';
import { routeActions } from 'react-router-redux';

import RaisedButton from 'material-ui/lib/raised-button';

import Dropdown from '../components/dropdown.jsx';
import Content from './Content.jsx';

import { PLANTS_TYPES, POISON_TYPES, MEANS_TYPES } from '../config/constans';
import * as SelectActions from '../actions/select';
import { connector } from '../tools';

const Search = props => {
    const { values, select, routing} = props;
    return (<Content>
        <Dropdown elements={PLANTS_TYPES}
                  label={'Pflanzenauswahl'}
                  value={values.plant}
                  onChange={select.changePlant}/>
        <Dropdown elements={POISON_TYPES}
                  label={'Giftauswahl'}
                  value={values.poison}
                  onChange={select.changePoison}/>
        <Dropdown elements={MEANS_TYPES}
                  label={'Mittelauswahl'}
                  value={values.means}
                  onChange={select.changeMeans}/>

        <RaisedButton label='Suche starten' primary={true} style={{width : '100%'}}
                      onClick={() => {routing.push('/result');}}/>
    </Content>);
};


Search.propTypes = {
    values: PropTypes.object.isRequired,
    select: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    values: state.changeDropdown
});

const actionList = {
    'select': SelectActions,
    'routing': routeActions
};

export default connector(mapStateToProps, actionList)(Search);


