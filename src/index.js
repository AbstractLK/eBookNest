import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ScrollToTop } from './components';
import { FilterProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <ScrollToTop />
        <ToastContainer position='bottom-right' />
        <App />
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);