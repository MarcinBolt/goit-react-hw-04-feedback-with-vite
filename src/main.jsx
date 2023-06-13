import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FeedbackProvider } from './components/FeedbackContext/FeedbackContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </React.StrictMode>
);
