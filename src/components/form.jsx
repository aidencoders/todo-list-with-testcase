import React, { useCallback, useState } from 'react';

const Form = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(event => {
    setValue(event.target.value);
  }, []);

  const onSubmit = useCallback(event => {
    onInsert(value);
    setValue('');
    event.preventDefault();
  }, [onInsert, value]);

  return (
    <form onSubmit={onSubmit}>
      <input
        data-testid='form__input'
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={onChange}
      />
      <button data-testid='form__button' type='submit'>등록</button>
    </form>
  );
};

export default Form;
