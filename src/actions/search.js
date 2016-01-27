
export const CHANGE_DROPDOWN_PLANTS = "CHANGE_DROPDOWN_PLANTS";
export const CHANGE_DROPDOWN_POISON = "CHANGE_DROPDOWN_POISON";
export const CHANGE_DROPDOWN_MEANS = "CHANGE_DROPDOWN_MEANS";

export function changePlant(event, index, value) {
  return {
    type: CHANGE_DROPDOWN_PLANTS,
    value : value
  };
};

export function changePoison(event, index, value) {
  return {
    type: CHANGE_DROPDOWN_POISON,
    value : value
  };
};

export function changeMeans(event, index, value) {
  return {
    type: CHANGE_DROPDOWN_Means,
    value : value
  };
};