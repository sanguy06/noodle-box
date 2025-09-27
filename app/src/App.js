//import logo from './logo.svg';
import ClosedBox from "./assets/ClosedBox.png"
import './App.css';
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";
function App() {

  const navigate = useNavigate("")


  return (
  
    <div className="App">

      <header className="App-header">
        <img src={ClosedBox} className="Closed-Box" alt="Closed Blind Box" />
        

        <button className="App-button" onClick={() => alert('Button clicked!')}>
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
