import { useState } from 'react';
import PropTypes from 'prop-types';

import css from './movies-page-form.module.css';

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
      <input onChange={onChange} type="text" value={query} />
      <button type="submit">Search</button>
    </form>
  );
};

export default MoviesPageForm;

MoviesPageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
