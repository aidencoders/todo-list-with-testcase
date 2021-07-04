import React from 'react';
import TodoItem from '../components/todo-item';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import { toHaveAttribute, toHaveStyle, toBeCalledWith } from '@testing-library/jest-dom';


describe('TodoItem Component', () => {
  const sampleTodo = {
    id: 1,
    text: 'TDD 배우기',
    done: false,
  };

  const setup = (props = {}) => {
    const initialProps = { todo: sampleTodo };
    const lists = render(<TodoItem {...initialProps} {...props} />);
    const { getByTestId } = lists;
    const todo = props.todd || initialProps.todo;
    const span = getByTestId('todo-item__span');
    const button = getByTestId('todo-item-delete__button');

    return {
      ...lists,
      span,
      button
    };
  };

  xit('has span and button', () => {
    const { span, button } = setup();
    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('shows line-through on span when done is true', () => {
    const { span } = setup({ todo: { ...sampleTodo, done: true } });
    expect(span).toHaveStyle('text-decoration: line-through;');
  });

  it('does not show line-through on span when done is false', () => {
    const { span } = setup({ todo: { ...sampleTodo, done: false } });
    expect(span).not.toHaveStyle('text-decoration: line-through;');
  });

  it('calls onToggle', () => {
    const onToggle = jest.fn();
    const { span } = setup({ onToggle });
    fireEvent.click(span);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });

  it('calls onRemove', () => {
    const onRemove = jest.fn();
    const { button } = setup({ onRemove });
    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
