import dayjs from 'dayjs';
import { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';

const WordItem = ({ word }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const date = dayjs(word.dateCreated).format('MMM DD, YYYY, H:MM A');

  const openUrlInNewTab = (e) => {
    chrome.tabs.create({ url: e.target.href });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  // The initial outlined delete button
  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleDeleteWordItem = () => {
    // TODO: Implement
  };

  const actionsStyle = {
    display: showDeleteConfirmation ? 'none' : '',
  };

  const deleteConfirmationStyle = {
    display: showDeleteConfirmation ? '' : 'none',
  };

  return (
    <Accordion.Item className="word-item" eventKey={word.id}>
      <Accordion.Header className="fw-semibold">{word.text}</Accordion.Header>
      <Accordion.Body>
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
          <strong>Notes:</strong>
        </p>
        <div className="word-item-actions" style={actionsStyle}>
          <Button variant="outline-danger" onClick={handleDeleteClick}>
            Delete
          </Button>{' '}
          <Button variant="outline-primary" onClick={handleEditClick}>
            Edit
          </Button>{' '}
        </div>
        <div className="delete-confirmation" style={deleteConfirmationStyle}>
          Are you sure you want to delete?
          <Button variant="danger" onClick={handleDeleteWordItem}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default WordItem;
