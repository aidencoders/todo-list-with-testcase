import React from 'react';
import { act, fireEvent, getByTestId, render } from '@testing-library/react';
import { toHaveAttribute } from '@testing-library/jest-dom';
import Form from '../components/form';

describe('Form test', () => {
  it('has input and a button', () => {
    act(() => {
      const { getByPlaceholderText, getByTestId }= render(<Form />);
      getByPlaceholderText('할 일을 입력하세요');
      getByTestId('form__button');
    });
  });

  it('change event', () => {
    const { getByPlaceholderText }= render(<Form />);
    const input = getByPlaceholderText('할 일을 입력하세요');
    fireEvent.change(input, {
      target: {
        value: 'TDD 지식 공유'
      }
    });
    expect(input).toHaveAttribute('value', 'TDD 지식 공유');
  });

  it('calls onInsert and clears input', () => {
    const onInsert = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <Form onInsert={onInsert} />
    );
    const input = getByPlaceholderText('할 일을 입력하세요');
    const button = getByText('등록');

    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기'
      }
    });

    fireEvent.click(button);
    expect(onInsert).toBeCalledWith('TDD 배우기');
    expect(input).toHaveAttribute('value', '');
  });
});
