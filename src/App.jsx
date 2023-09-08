import { useState, useEffect } from 'react';
import { storage } from './utils';
import './App.css';
import { useWords } from './hooks/useWords';

function App() {
  return (
    <div className="App">
      <h3>Word Vault</h3>
      <WordFilter />
      <WordSortOption />
      <WordList />
    </div>
  );
}

function WordFilter() {
  const { filter, setFilter } = useWords();

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="word-filter">
      <label htmlFor="word-filter-input">Search</label>
      <input
        type="text"
        id="word-filter-input"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}

function WordList() {
  const { filteredWords, sortBy } = useWords();

  return (
    <div className="word-list">
      {filteredWords.length > 0 &&
        filteredWords.map((word) => <WordItem key={word.id} word={word} />)}
    </div>
  );
}

function WordItem({ word }) {
  return <p className="word-item">{word.text}</p>;
}

function WordSortOption() {
  const { sortBy, setSortBy } = useWords();

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="word-sort">
      <label htmlFor="word-sort-select">Sort</label>
      <select id="word-sort-select" value={sortBy} onChange={handleSortChange}>
        <option value="date">Date</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
}

export default App;
