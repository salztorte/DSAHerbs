import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const dispatchMapper = list => dispatch =>{
    let map = {};
    for(let item in list){
        map[item] = bindActionCreators(list[item], dispatch);
    }
    return map;
};

export const connector = function(listState, listDispatch){
    return connect(listState, dispatchMapper(listDispatch));
};