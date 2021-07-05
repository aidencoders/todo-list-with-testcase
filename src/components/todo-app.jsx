import React from 'react';
import TodoForm from './form';
import TodoList from './todo-list';

const TodoApp = () => {
  return (
    <>
      <TodoForm data-testid='todo__form' />
      <TodoList todos={[]} />
    </>
  );
};

export default TodoApp;