import React from 'react';
import TodoItem from '../components/todo-item';

const TodoList = ({ todo, onToggle, onRemove }) => {
  return (
    <ul data-testid='todo-list__ul'>
      {
        todo.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))
      }
    </ul>
  );
};

export default TodoList;
