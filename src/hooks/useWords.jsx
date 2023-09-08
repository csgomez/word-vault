import { useContext } from 'react';
import WordsContext from '../contexts/WordsContext';

export default useWords = () => {
  return useContext(WordsContext);
};
