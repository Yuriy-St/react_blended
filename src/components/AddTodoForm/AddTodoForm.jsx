import { useState } from 'react';
import { addTodo } from 'redux/reducers';

import { FiSearch } from 'react-icons/fi';
import {
  FormBtn,
  InputSearch,
  AddTodoFormStyled,
} from '../AddTodoForm/AddTodoForm.styled';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

export function AddTodoForm() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const handleQuery = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo({ text: query, id: nanoid() }));
    setQuery('');
  };

  return (
    <AddTodoFormStyled onSubmit={handleSubmit}>
      <InputSearch
        placeholder="What do you whant to write?"
        value={query}
        onChange={handleQuery}
      />
      <FormBtn type="submit">
        <FiSearch />
      </FormBtn>
    </AddTodoFormStyled>
  );
}
