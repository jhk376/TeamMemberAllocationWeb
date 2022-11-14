import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
=======
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import Nav from './Nav';
import NotFound from './NotFound';
import GroupedTeamMembers from './GroupedTeamMembers';

import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
