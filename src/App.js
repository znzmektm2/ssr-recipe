import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          type="text"
          name="f"
          placeholder="아무거나 입력"
          onChange={(e) => console.log(e.target.value)}
        />
      </header>
    </div>
  );
}

export default App;
