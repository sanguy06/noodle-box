//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import ClosedBox from "./assets/ClosedBox.png"
import RamenOpended from "./assets/RamenOpened.png"
import PhoClosed from "./assets/PhoClosed.png"
import UdonClosed from "./assets/UdonClosed.png"
import modalBg from './assets/RamenAlone.png';
import './App.css';

function App() {

  const [isShaking, setIsShaking] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [isFading, setIsFading] = useState(false);

  //shaking box func
  const handleShake = () => {
    setIsShaking(true);
    setTimeout(() => { setIsShaking(false); setShowImages(true);} ,3000); // 3 seconds
  };

  //Modal timer
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 min timer in seconds

  useEffect(() => {
    if (!showModal) return;
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [showModal, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

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

      <button className="Ramen-timer" onClick={() => { setTimeLeft(300); setShowModal(true); }}>
        Start Ramen Timer
      </button>

      <button className="Pho-timer" onClick={() => alert('This Button is locked!')}>
        Pho Button Locked
      </button>

      <button className="Udon-timer" onClick={() => alert('This Button is locked!')}>
        Udon Button Locked 
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div
            className="modal-content"
            style={{
              backgroundImage: `url(${modalBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '20px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
              color: '#333',
              fontFamily: 'Arial, sans-serif',
              textAlign: 'center',
            }}
          >

            <h2>Ramen Timer</h2>
            <p className="timer-text">{formatTime(timeLeft)}</p>
            <button className="App-button" onClick={() => setShowModal(false)}> Close</button>
          </div>
        </div>
      )}

    </div>
  );
  }

  //Main: PG0
  return (
    <div className="App">
      <header className="App-header">
        <img src={ClosedBox} className={`App-closed-box ${isShaking ? "shake" : ""}`} alt="Closed Blind Box" />

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
