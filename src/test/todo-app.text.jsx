import React from 'react';
import TodoApp from '../components/todo-app';
import { render, getByTestId } from '@testing-library/react';

describe('TodoApp', () => {
  it('renders TodoForm and TodoList', () => {
    const { getByTestId } = render(<TodoApp />);
    getByTestId('todo-list__ul');
    getByTestId('form__button');
  });
});