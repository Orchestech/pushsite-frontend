import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import Autorization from './components/Autorization';

function App() {
  return (
    <>
      <Router>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/autorization" element={< Autorization/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
