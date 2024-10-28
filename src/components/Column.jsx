import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';

const Column = ({ column, columnIndex }) => {
  return (
    <div className="column">
      <h2>{column.title}</h2>

      <Droppable droppableId={`${columnIndex}`}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {column.cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

    </div>
  );
};

export default Column;
