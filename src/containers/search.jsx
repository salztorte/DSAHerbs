import React, { PropTypes } from 'react';
import { routeActions } from 'react-router-redux';

import RaisedButton from 'material-ui/lib/raised-button';

import Dropdown from '../components/Dropdown.jsx';
import Content from './Content.jsx';

import { PLANTS_TYPES, POISON_TYPES, MEANS_TYPES } from '../config/constans';

import * as SelectActions from '../actions/select';
import * as SearchActions from '../actions/search';

import { connector } from '../tools';

let Search = props => {
    const { values, select, routing, search} = props;
    const onClick = () => {
        search.doSearch(values);
        routing.push('/result');
    };

    return (<Content>
        <Dropdown elements={PLANTS_TYPES}
                  label={'Pflanzenauswahl'}
                  value={values.plant}
                  onChange={select.changePlant}/>
        <Dropdown elements={POISON_TYPES}
                  label={'Giftauswahl'}
                  value={values.poison}
                  eonChange={select.changePoison}/>
        <Dropdown elements={MEANS_TYPES}
                  label={'Mittelauswahl'}
                  value={values.means}
                  onChange={select.changeMeans}/>

        <RaisedButton label='Suche starten' primary={true} style={{width : '100%'}}
                      onClick={onClick}/>
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
    'search' : SearchActions,
    'routing': routeActions
};

export default connector(mapStateToProps, actionList)(Search);


