import { SELECT_ACTION as types } from '../config/constans';

export const changePlant = (value) => ({type: types.CHANGE_DROPDOWN_PLANTS, value});

export const changePoison = (value) => ({type: types.CHANGE_DROPDOWN_POISON, value});

export const changeMeans = (value) => ({type: types.CHANGE_DROPDOWN_MEANS, value});