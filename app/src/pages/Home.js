import ClosedBox from "../assets/ClosedBox.png"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
export default function Home () {

    const [isShaking, setIsShaking] = useState(false);
    const [isFading, setIsFading] = useState(false);

    const handleShake = () => {
        setIsShaking(true);
        setIsFading(true);
        setTimeout(() => {
            setIsShaking(false); 
            }, 
            3000); // 3 seconds
        
    };
    const navigate = useNavigate();
    return (
    
    <div className="App">
        <header className="App-header">
        <img src={ClosedBox} className={`App-closed-box ${isShaking ? "shake": ""} ${isFading ? "fade-out" : ""} `} alt="Closed Blind Box" />

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
