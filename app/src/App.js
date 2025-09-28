//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import ClosedBox from "./assets/ClosedBox.png"
import RamenOpened from "./assets/RamenOpened.png"
import OpenedBox from "./assets/OpenedBox.png"
import PhoClosed from "./assets/PhoClosed.png"
import UdonClosed from "./assets/UdonClosed.png"
import modalBg from './assets/RamenAlone.png';
import './App.css';

function App() {
  const [isShaking, setIsShaking] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [showOpenedBox, setShowOpenedBox] = useState(false);
  const [showImages, setShowImages] = useState(false);

  //shaking box func
  const handleShake = () => {
    setIsShaking(true);
    setIsFading(true);
    setTimeout(() => {
      setIsShaking(false);
      setIsFading(false);
      setShowOpenedBox(true);
      // Show OpenedBox for 5s, then show images page
      setTimeout(() => {
        setShowOpenedBox(false);
        setShowImages(true);
      }, 5000);
    }, 3000); // 3 seconds
  }

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
        <div className="top-row">
          <div className="image-column">
            <img src={RamenOpened} alt="Ramen" />
            <button
              className="Ramen-timer timer-btn"
              onClick={() => { setTimeLeft(300); setShowModal(true); }}
            >
              Start Ramen Timer
            </button>
          </div>
          <div className="image-column">
            <img src={PhoClosed} alt="Pho" />
            <button
              className="Pho-timer timer-btn"
              onClick={() => alert('This Button is locked!')}
            >
              Pho Button Locked
            </button>
          </div>
        </div>
        <div className="bottom-row">
          <div className="image-column">
            <img src={UdonClosed} alt="Udon" />
            <button
              className="Udon-timer timer-btn"
              onClick={() => alert('This Button is locked!')}
            >
              Udon Button Locked
            </button>
          </div>
        </div>
        <button className="App-button" style={{ position: 'absolute', top: 20, left: 20 }} onClick={() => setShowImages(false)}>
          Go Back
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
        {!showOpenedBox && (
          <img
            src={ClosedBox}
            className={`App-closed-box ${isShaking ? "shake" : ""} ${isFading ? "fade-out" : ""}`}
            alt="Closed Blind Box"
          />
        )}
        {showOpenedBox && (
          <img
            src={OpenedBox}
            className="App-opened-box fade-in"
            alt="Opened Blind Box"
          />
        )}
        {!showOpenedBox && (
          <button className="App-button" onClick={handleShake}>
            OPEN BOX
          </button>
        )}
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