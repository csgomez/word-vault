import WordFilter from './components/WordFilter';
import WordSortOption from './components/WordSortOption';
import WordList from './components/WordList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Word Vault</h2>
      <WordFilter />
      <WordSortOption />
      <WordList />
    </div>
  );
}

export default App;
