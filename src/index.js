import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Login from './pages/login/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
