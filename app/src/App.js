//import logo from './logo.svg';
import React, { useState } from 'react';
import ClosedBox from "./assets/ClosedBox.png"
import './App.css';

function App() {

  const [isShaking, setIsShaking] = useState(false);

  const handleShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 3000); // 3 seconds
  };

  //keep all here
  return (
    <div className="App">
      <header className="App-header">
        <img src={ClosedBox} className={`Closed-Box ${isShaking ? "shake" : ""}`} alt="Closed Blind Box" />

        <button className="App-button" onClick={handleShake}>
          OPEN BOX
        </button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
