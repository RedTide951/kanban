import { ADD_COLUMN, REMOVE_COLUMN, UPDATE_COLUMNS } from '../actions/columnActions';

const initialState = {
  columns: [
    {
      title: 'Column 1',
      cards: [
        { id: 'card-1', content: 'Card 1' },
        { id: 'card-2', content: 'Card 2' },
      ],
    },
    {
      title: 'Column 2',
      cards: [
        { id: 'card-3', content: 'Card 3' },
        { id: 'card-4', content: 'Card 4' },
      ],
    },
  ],
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
    case UPDATE_COLUMNS:
      return {
        ...state,
        columns: action.payload,
      };
    default:
      return state;
  }
};

export default columnReducer;
