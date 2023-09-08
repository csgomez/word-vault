import WordFilter from './components/WordFilter';
import WordSortOption from './components/WordSortOption';
import WordList from './components/WordList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Word Vault</h3>
      <WordFilter />
      <WordSortOption />
      <WordList />
    </div>
  );
}

export default App;
