import { Accordion } from 'react-bootstrap';
import { useWords } from '../hooks/useWords';
import WordItem from './WordItem';

const WordList = () => {
  const { filteredWords } = useWords();

  if (filteredWords.length === 0) {
    return <p>No words...</p>;
  }

  return (
    <Accordion alwaysOpen>
      {filteredWords.map((word) => (
        <WordItem key={word.id} word={word} />
      ))}
    </Accordion>
  );
};

export default WordList;
