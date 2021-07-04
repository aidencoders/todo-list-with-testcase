import React from 'react';
import { act, fireEvent, getByText, render } from '@testing-library/react';
import { toHaveAttribute } from '@testing-library/jest-dom';
import Form from '../components/form';
import TodoList from '../components/todo-list';

describe('TodoList', () => {
  const sampleTodo = [
    {
      id: 1,
      text: 'TDD 배우기',
      done: true
    },
    {
      id: 2,
      text: 'react-testing-library 사용하기',
      done: true
    }
  ];

  it('renders todo properly', () => {
    const { getByText } = render(<TodoList todo={sampleTodo} />);
    getByText(sampleTodo[0].text);
    getByText(sampleTodo[1].text);
  });

  it('calls onToggle and onRemove', () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    const { getByText, getAllByText } = render(
      <TodoList todo={sampleTodo} onToggle={onToggle} onRemove={onRemove} />
    );

    fireEvent.click(getByText(sampleTodo[0].text));
    expect(onToggle).toBeCalledWith(sampleTodo[0].id);

    fireEvent.click(getAllByText('삭제')[0]);
    expect(onRemove).toBeCalledWith(sampleTodo[0].id);
  })
});
