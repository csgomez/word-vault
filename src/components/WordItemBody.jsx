import dayjs from 'dayjs';
import { useState } from 'react';
import { useWords } from '../hooks/useWords';
import { Button } from 'react-bootstrap';

const WordItemBody = ({ word, onEnterEditMode }) => {
  const { deleteWord } = useWords();

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const date = dayjs(word.dateCreated).format('MMM DD, YYYY, H:MM A');

  const openUrlInNewTab = (e) => {
    chrome.tabs.create({ url: e.target.href });
  };

  // The initial outlined delete button
  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleDeleteWordItem = async () => {
    await deleteWord(word.id);
  };

  const actionsStyle = {
    display: showDeleteConfirmation ? 'none' : '',
  };

  const deleteConfirmationStyle = {
    display: showDeleteConfirmation ? '' : 'none',
  };

  return (
    <div className="word-item-body">
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>URL:</strong>{' '}
        <a href={word.pageUrl} onClick={openUrlInNewTab}>
          {word.pageUrl}
        </a>
      </p>
      <p>
        <strong>Tab Title:</strong> {word.tabTitle}
      </p>
      <p>
        <strong>Notes:</strong> {word.note}
      </p>
      <div className="word-item-actions" style={actionsStyle}>
        <Button variant="outline-danger" onClick={handleDeleteClick}>
          Delete
        </Button>{' '}
        <Button variant="outline-primary" onClick={onEnterEditMode}>
          Edit
        </Button>{' '}
      </div>
      <div className="delete-confirmation" style={deleteConfirmationStyle}>
        <p>Are you sure you want to delete?</p>
        <Button variant="danger" onClick={handleDeleteWordItem}>
          Yes
        </Button>
        <Button variant="secondary" onClick={handleCancelDelete}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default WordItemBody;
