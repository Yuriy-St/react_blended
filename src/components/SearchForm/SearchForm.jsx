import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');
  const handleQuery = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <InputSearch
        placeholder="What do you whant to write?"
        value={query}
        onChange={handleQuery}
      />
      <FormBtn type="submit">
        <FiSearch />
      </FormBtn>
    </SearchFormStyled>
  );
}
