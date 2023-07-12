import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import css from './MoviesPageForm.module.css';

const MoviesPageForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();

    if (query.trim() !== '') {
      onSubmit(query);
    }

    setQuery('');
  };

  const onChange = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <form onSubmit={onFormSubmit} className={css.form}>
      <input
        className={css.input}
        onChange={onChange}
        type="text"
        value={query}
        placeholder="Type movie"
      />
      <button className={css.searchBtn} type="submit">
        <BsSearch size="16px" color="#fff" />
      </button>
    </form>
  );
};

export default MoviesPageForm;
