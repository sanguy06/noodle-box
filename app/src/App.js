//import logo from './logo.svg';
import ClosedBox from "./assets/ClosedBox.png"
import './App.css';
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Switch from "./pages/Switch";
function App() {

  const navigate = useNavigate("")

  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/switch" element={<Switch />} />
      </Routes>
    </div>
  )
}
export default App;
