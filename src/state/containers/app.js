"use strict";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import Counter from '../components/Counter'
//import * as CounterActions from '../actions/counter'

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, git dispatch);
}

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);