import React from 'react';
import { connect } from 'react-redux';
import { addColumn, removeColumn, updateColumns } from '../actions/columnActions';
import Column from './Column.jsx';
import { DragDropContext } from 'react-beautiful-dnd';

const Board = ({ columns, addColumn, removeColumn, dispatch }) => {

const onDragEnd = (result) => {
    const { source, destination } = result;

    // If there's no destination (dropped outside a column), do nothing
    if (!destination) {
      return;
    }

    // If the location of the draggable did not change, do nothing
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Finding the column from which the card is dragged and the card
    const sourceColumn = columns[source.droppableId];
    const draggedCard = sourceColumn.cards[source.index];

    // Performing the drag and drop operation
    const newColumns = Array.from(columns);
    newColumns[source.droppableId] = {
      ...sourceColumn,
      cards: [...sourceColumn.cards],
    };
    newColumns[source.droppableId].cards.splice(source.index, 1);

    const destinationColumn = columns[destination.droppableId];
    newColumns[destination.droppableId] = {
      ...destinationColumn,
      cards: [...destinationColumn.cards],
    };
    newColumns[destination.droppableId].cards.splice(destination.index, 0, draggedCard);

    // Dispatching the action to update the columns in the state
    dispatch(updateColumns(newColumns));
  };


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {columns.map((column, index) => (
          <Column key={index} columnIndex={index} column={column} />
        ))}
        <button onClick={() => addColumn()}>Add Column</button>
        {columns.length > 0 && (
          <button onClick={() => removeColumn(columns.length - 1)}>Remove Column</button>
        )}
      </div>
    </DragDropContext>
  );
};

const mapStateToProps = (state) => ({
  columns: state.columns.columns,
});

export default connect(mapStateToProps, { addColumn, removeColumn })(Board);
