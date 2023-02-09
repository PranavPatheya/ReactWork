import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Form from './Form'
import Confirmation from './Confirmation';


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="About" element={<About />}  />
      <Route path="Form" element={<Form />}  />
      <Route path="Confirmation" element={<Confirmation/>} />
    </Routes>
  </BrowserRouter>;
}

export default App;
