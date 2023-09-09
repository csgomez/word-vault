import { useWords } from '../hooks/useWords';

const WordSortOption = () => {
  const { sortBy, setSortBy } = useWords();

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="word-sort">
      <label htmlFor="word-sort-select">Sort</label>
      <select id="word-sort-select" value={sortBy} onChange={handleSortChange}>
        <option value="date">Date</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
};

export default WordSortOption;
