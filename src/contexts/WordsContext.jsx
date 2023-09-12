import { createContext, useEffect, useState } from 'react';
import { storage } from '../utils';

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const sortedWords = words.toSorted((wordA, wordB) => {
    switch (sortBy) {
      case 'date':
        return wordA.dateCreated - wordB.dateCreated;
      case 'name':
        // Sort alphabetically in ascending order
        return wordA.text.localeCompare(wordB.text);
      default:
        // No change in order
        console.error(`Unhandled sorting method: ${sortBy}`);
        return 0;
    }
  });

  const filteredWords = sortedWords.filter((word) =>
    word.text.includes(filter)
  );

  const getStoredWords = async () => {
    const { words } = await storage.get('words');
    console.log('Stored words:', words);
    setWords(words);
  };

  const deleteWord = async (wordId) => {
    let newWords = words.filter((word) => word.id !== wordId);
    await storage.set({ words: newWords });
    setWords(newWords);
  };

  useEffect(() => {
    getStoredWords();
  }, []);

  return (
    <WordsContext.Provider
      value={{
        words,
        setWords,
        deleteWord,
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
