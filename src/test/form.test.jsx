import React from 'react';
import { act, fireEvent, getByTestId, render } from '@testing-library/react';
import { toHaveAttribute } from '@testing-library/jest-dom';
import Form from '../components/form';

describe('Form test', () => {
  const setup = (props = {}) => {
    const form = render(<Form {...props} />);
    const { getByTestId, getByPlaceholderText } = form;
    const input = getByPlaceholderText('할 일을 입력하세요');
    const button = getByTestId('form__button');

    return {
      ...form,
      input,
      button
    };
  };

  it('has input and a button', () => {
    act(() => {
      const { input, button } = setup();
      expect(input).toBeTruthy();
      expect(button).toBeTruthy();
    });
  });

  it('change event', () => {
    const { input } = setup();

    fireEvent.change(input, {
      target: {
        value: 'TDD 지식 공유',
      }
    });

    expect(input).toHaveAttribute('value', 'TDD 지식 공유');
  });

  it('calls onInsert and clears input', () => {
    const onInsert = jest.fn();
    const { input, button } = setup({ onInsert });

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
