import dayjs from 'dayjs';
import { Button } from 'react-bootstrap';

const WordItemBodyEdit = ({ word, onExitEditMode }) => {
  const date = dayjs(word.dateCreated).format('MMM DD, YYYY, H:MM A');

  const openUrlInNewTab = (e) => {
    chrome.tabs.create({ url: e.target.href });
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
      <Button variant="secondary" onClick={onExitEditMode}>
        Cancel
      </Button>
      <Button variant="success">Save</Button>
    </div>
  );
};

export default WordItemBodyEdit;
