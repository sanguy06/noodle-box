//import logo from './logo.svg';
import React, { useState } from 'react';
import ClosedBox from "./assets/ClosedBox.png"
import RamenOpended from "./assets/RamenOpened.png"

import PhoClosed from "./assets/PhoClosed.png"
import UdonClosed from "./assets/UdonClosed.png"

import './App.css';

function App() {

  //shaking box function
  const [isShaking, setIsShaking] = useState(false);


  const handleShake = () => {
    setIsShaking(true);
    setTimeout(() => { setIsShaking(false); setShowImages(true);} ,3000); // 3 seconds

  };

  

  const [showImages, setShowImages] = useState(false);

  //New Page: P1
  if (showImages) {
    // This is the "new page" with 3 
   return (
    <div className="container">
      <div className="side left">
        <img src={RamenOpended} alt="Left" />
      </div>
      <div className="side right">
        <img src={PhoClosed} alt="Right" />
      </div>
      <div className="middle">
        <img src={UdonClosed} alt="Middle" />
      </div>
      <button className="App-button" onClick={() => setShowImages(false)}>
        Go Back
      </button>
    </div>
  );
  }

  //Main: PG0
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