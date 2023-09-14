import { Accordion } from 'react-bootstrap';
import WordItemBody from './WordItemBody';

const WordItem = ({ word }) => {
  return (
    <Accordion.Item className="word-item" eventKey={word.id}>
      <Accordion.Header className="fw-semibold">{word.text}</Accordion.Header>
      <Accordion.Body>
        <WordItemBody word={word} />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default WordItem;
