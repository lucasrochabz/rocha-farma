import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { AdminPage } from './pages/AdminPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminPage />
  </React.StrictMode>,
);
