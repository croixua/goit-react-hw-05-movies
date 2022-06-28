import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import s from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    const inputValue = e.target.value;

    setInputValue(inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') return alert('Введите поисковый запрос');
    onSubmit(inputValue);

    setInputValue('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <button type="submit" className={s.button}>
        <FiSearch size="1.5em" />
      </button>

      <input
        value={inputValue}
        onChange={handleChange}
        className={s.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </form>
  );
}
