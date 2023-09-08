import { createContext, useEffect, useState } from 'react';
import { storage } from '../utils';

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const filteredWords = words.filter((word) => word.text.includes(filter));

  const getStoredWords = async () => {
    const { words } = await storage.get('words');
    console.log('Stored words:', words);
    setWords(words);
  };

  useEffect(() => {
    getStoredWords();
  }, []);

  return (
    <WordsContext.Provider
      value={{
        words,
        setWords,
        filteredWords,
        filter,
        setFilter,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export default WordsContext;
