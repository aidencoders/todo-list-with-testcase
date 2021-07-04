import React, { useCallback, useState } from 'react';

const Form = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback(event => {
    setValue(event.target.value);
  }, []);

  return (
    <form>
      <input
        data-testid='form__input'
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={onChange}
      />
      <div data-testid='form__button' type='submit'>등록</div>
    </form>
  );
};

export default Form;
