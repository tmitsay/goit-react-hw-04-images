import { useState } from 'react';
import css from './searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [valueInput, setValueInput] = useState('');
  const [searchName, setSearchName] = useState('');

  const onSubmitForm = event => {
    event.preventDefault();

    setSearchName(valueInput.trim());

    onSubmit(valueInput);

    event.target.reset();
  };

  const onInputChange = event => setValueInput(event.target.value);

  return (
    <header className={css.searchbar}>
      <form onSubmit={onSubmitForm} className={css.form}>
        <button type="submit" className={css.button}>
          <span className={css.span}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          value={valueInput}
          name={searchName}
          autoFocus
          placeholder="Search images and photos"
          onChange={onInputChange}
        />
      </form>
    </header>
  );
};
