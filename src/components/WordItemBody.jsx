import dayjs from 'dayjs';
import { useState } from 'react';
import { useWords } from '../hooks/useWords';
import { Button } from 'react-bootstrap';

const WordItemBody = ({ word }) => {
  const { deleteWord } = useWords();

  const [editMode, setEditMode] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [noteInput, setNoteInput] = useState(word.note);
  const date = dayjs(word.dateCreated).format('MMM DD, YYYY, H:MM A');

  const openUrlInNewTab = (e) => {
    chrome.tabs.create({ url: e.target.href });
  };

  const enterEditMode = () => {
    setEditMode(true);
  };

  const exitEditMode = () => {
    setEditMode(false);
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
      <div className="word-item-note">
        {editMode ? (
          <>
            <p>
              <strong>Notes:</strong>
            </p>
            <textarea
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
            />
          </>
        ) : (
          <p>
            <strong>Notes:</strong> {word.note}
          </p>
        )}
      </div>

      {editMode ? (
        <div className="word-item-edit-confirmation">
          <Button variant="secondary" onClick={exitEditMode}>
            Cancel
          </Button>
          <Button variant="success">Save</Button>
        </div>
      ) : showDeleteConfirmation ? (
        <div className="delete-confirmation">
          <p>Are you sure you want to delete?</p>
          <Button variant="danger" onClick={handleDeleteWordItem}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
        </div>
      ) : (
        <div>
          <Button variant="outline-danger" onClick={handleDeleteClick}>
            Delete
          </Button>{' '}
          <Button variant="outline-primary" onClick={enterEditMode}>
            Edit
          </Button>{' '}
        </div>
      )}
    </div>
  );
};

export default WordItemBody;
