import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import WordItemBody from './WordItemBody';
import WordItemBodyEdit from './WordItemBodyEdit';

const WordItem = ({ word }) => {
  const [editMode, setEditMode] = useState(false);

  const enterEditMode = () => {
    setEditMode(true);
  };

  const exitEditMode = () => {
    setEditMode(false);
  };

  return (
    <Accordion.Item className="word-item" eventKey={word.id}>
      <Accordion.Header className="fw-semibold">{word.text}</Accordion.Header>
      <Accordion.Body>
        {!editMode && (
          <WordItemBody word={word} onEnterEditMode={enterEditMode} />
        )}
        {editMode && (
          <WordItemBodyEdit word={word} onExitEditMode={exitEditMode} />
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default WordItem;
