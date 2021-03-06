import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App';
import AuthProvider from './store/AuthContext';
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
       <BrowserRouter>
     <AuthProvider>
       <App />
    </AuthProvider>
       </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

