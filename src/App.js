import './App.css';
import FormPage from './Components/FormPage';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<FormPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
