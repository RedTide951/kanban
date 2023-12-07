import { ADD_COLUMN, REMOVE_COLUMN } from '../actions/columnActions';

const initialState = {
  columns: [],
};

const columnReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return {
        ...state,
        columns: [...state.columns, { title: `Column ${state.columns.length + 1}`, cards: [] }],
      };
    case REMOVE_COLUMN:
      const updatedColumns = [...state.columns];
      updatedColumns.splice(action.payload, 1);
      return {
        ...state,
        columns: updatedColumns,
      };
    default:
      return state;
  }
};

export default columnReducer;
