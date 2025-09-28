//import logo from './logo.svg';
import React, { useState } from 'react';
import ClosedBox from "./assets/ClosedBox.png"
import OpenedBox from "./assets/OpenedBox.png"
import PhoClosed from "./assets/PhoClosed.png"
import UdonClosed from "./assets/UdonClosed.png"
import RamenOpened from "./assets/RamenOpened.png"

import './App.css';

function App() {
  //shaking box function
  const [isShaking, setIsShaking] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [showOpenedBox, setShowOpenedBox] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);

  const handleShake = () => {
    setIsShaking(true);
    setIsFading(true);
    setTimeout(() => {setIsShaking(false); setIsFading(false); 
      setIsFadingIn(true); setShowOpenedBox(true);} ,3000); // 3 seconds
  }

  const [showImages, setShowImages] = useState(false);

  //New Page: P1
  if (showImages) {
    // This is the "new page" with 3 
   return (
    <div className="container">
      <div className="side left">
        <img src={RamenOpened} alt="Left" />
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

      <button className="Ramen-timer" onClick={() => alert('Clicked!')}>
        Start Ramen Timer
      </button>

      <button className="Pho-timer" onClick={() => alert('This Button is locked!')}>
        Pho Button Locked
      </button>

      <button className="Udon-timer" onClick={() => alert('This Button is locked!')}>
        Udon Button Locked 
      </button>


    </div>
  );
  }

  //Main: PG0
  return (
    <div className="App">
      <header className="App-header">
       
        <img src={ClosedBox} className={`App-closed-box ${isShaking ? "shake" : ""} ${isFading ? "fade-out" : ""}`} alt="Closed Blind Box" 
          style={{display: showOpenedBox ? "none": "block"}}
         />
     
        
        <img src={OpenedBox} className={`App-opened-box ${showOpenedBox ? "fade-in": ""}`} alt="Opened Blind Box"
        
        />
         
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