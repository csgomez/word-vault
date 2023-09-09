import { useWords } from '../hooks/useWords';

const WordFilter = () => {
  const { filter, setFilter } = useWords();

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="word-filter">
      <label htmlFor="word-filter-input">Search</label>
      <input
        type="text"
        id="word-filter-input"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default WordFilter;
