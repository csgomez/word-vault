import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WordsProvider } from './contexts/WordsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WordsProvider>
      <App />
    </WordsProvider>
  </React.StrictMode>
);
