export const ADD_COLUMN = 'ADD_COLUMN';
export const REMOVE_COLUMN = 'REMOVE_COLUMN';

export const addColumn = () => ({
  type: ADD_COLUMN,
});

export const removeColumn = (index) => ({
  type: REMOVE_COLUMN,
  payload: index,
});
