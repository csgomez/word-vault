import { useContext } from 'react';
import WordsContext from '../contexts/WordsContext';

export const useWords = () => {
  return useContext(WordsContext);
};
