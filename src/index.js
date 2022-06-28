import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/croixua-goit-react-hw-05-movies.netlify.app">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
