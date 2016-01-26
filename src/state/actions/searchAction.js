"use strict";

export const types = {
    CHANGE_DROPDOWN : 'CHANGE_DROPDOWN'
};


export function changeDropdown(id, value){
    return {
        type : type.CHANGE_DROPDOWN,
        id : id,
        value : value
    };
};