import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  const navigate = useNavigate("")
  return (
  
    <div className="App">
      Hello
      <button onClick = {()=> navigate("/home")}>
        Login
      </button>
      
    </div>
  );
}

export default App;
