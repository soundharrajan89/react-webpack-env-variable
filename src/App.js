import React, { useEffect, Suspense } from "react";
import './App.css';
import config from '../public/config';

function App() {
  useEffect(() => {
    console.log(window.REACT_APP_NAME)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
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
        <h1>{process.env.REACT_APP_NAME}</h1>
      </header>
    </div>
  );
}

export default App;
