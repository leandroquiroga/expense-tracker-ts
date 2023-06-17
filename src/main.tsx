import React from 'react';
import ReactDOM from 'react-dom/client'

import { ExpenseTracker } from './ExpenseTracker';

import './index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ExpenseTracker />
  </React.StrictMode>
);
