import { useState, useEffect } from 'react';
import { storage } from './utils';
import './App.css';

function App() {
  const [words, setWords] = useState([]);

  console.log('This is the popup??');

  const getStoredWords = async () => {
    const { words } = await storage.get('words');
    console.log('Stored words:', words);
    setWords(words);
  };

  useEffect(() => {
    getStoredWords();
  }, []);

  return (
    <div className="App">
      <h3>Word Vault</h3>
      <WordFilter />
      <WordSortOption />
      <WordList words={words} />
    </div>
  );
}

function WordFilter() {
  return (
    <div className="word-filter">
      <label htmlFor="word-filter-input">Search</label>
      <input type="text" id="word-filter-input" />
    </div>
  );
}

function WordList({ words }) {
  return (
    <div className="word-list">
      {words.length > 0 &&
        words.map((word) => <WordItem key={word.id} word={word} />)}
    </div>
  );
}

function WordItem({ word }) {
  return <p className="word-item">{word.text}</p>;
}

function WordSortOption() {
  return (
    <div className="word-sort">
      <label htmlFor="word-sort-select">Sort</label>
      <select id="word-sort-select">
        <option value="date">Date</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
}

export default App;
