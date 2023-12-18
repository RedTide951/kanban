import React from 'react';
import { connect } from 'react-redux';
import { addColumn, removeColumn } from '../actions/columnActions';
import Column from './Column.jsx';

const Board = ({ columns, addColumn, removeColumn }) => {
  return (
    <div className="board">
      {columns.map((column, index) => (
        <Column key={index} columnIndex={index} column={column} />
      ))}
      <button onClick={() => addColumn()}>Add Column</button>
      {columns.length > 0 && (
        <button onClick={() => removeColumn(columns.length - 1)}>Remove Column</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  columns: state.columns.columns,
});

export default connect(mapStateToProps, { addColumn, removeColumn })(Board);
