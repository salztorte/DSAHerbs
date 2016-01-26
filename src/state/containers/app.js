"use strict";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../../components/search.jsx';
import * as SearchActions from '../actions/searchAction.js';

function mapStateToProps(state) {
    return {
        "plant" : state.plant,
        "poison" : state.poison,
        "means" : state.means,
        "others" : state.others
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(SearchActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);