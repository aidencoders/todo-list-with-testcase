import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  const { id, text, done } = todo;

  return (
    <li>
      <span
        style={{
          textDecoration: done ? 'line-through' : 'none'
        }}
        onClick={() => onToggle(id)}
        data-testid='todo-item__span'>{text}</span>
      <button onClick={() => onRemove(id)} data-testid='todo-item-delete__button'>삭제</button>
    </li>
  )
}

export default TodoItem;
