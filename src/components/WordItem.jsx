import dayjs from 'dayjs';
import { Accordion } from 'react-bootstrap';

const WordItem = ({ word }) => {
  const date = dayjs(word.dateCreated).format('MMM DD, YYYY, H:MM A');
  console.log(word);

  return (
    <Accordion.Item eventKey={word.id}>
      <Accordion.Header>{word.text}</Accordion.Header>
      <Accordion.Body>
        <p>Date: {date}</p>
        <p>
          Url: <a href={word.pageUrl}>{word.pageUrl}</a>
        </p>
        <p>Tab Title: {word.tabTitle}</p>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default WordItem;
