import dayjs from 'dayjs';
import { Accordion, Button } from 'react-bootstrap';

const WordItem = ({ word }) => {
  const date = dayjs(word.dateCreated).format('MMM DD, YYYY, H:MM A');

  return (
    <Accordion.Item className="word-item" eventKey={word.id}>
      <Accordion.Header className="fw-semibold">{word.text}</Accordion.Header>
      <Accordion.Body>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>URL:</strong> <a href={word.pageUrl}>{word.pageUrl}</a>
        </p>
        <p>
          <strong>Tab Title:</strong> {word.tabTitle}
        </p>
        <p>
          <strong>Notes:</strong>
        </p>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default WordItem;
