import React from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';

const Card = ({ card, index }) => {
  return (
    <Draggable draggableId={`${card.id}`} index={index}>
      <DragDropContext>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="card"
        >
          {card.content}
        </div>
      )}
      </DragDropContext>
    </Draggable>
  );
};

export default Card;
