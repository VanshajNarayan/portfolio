import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavbarFolder/Navbar';
import Home from './Components/HomeFolder/Home';
import About from './Components/AboutFolder/About';
import Service from './Components/ServiceFolder/Service';
import Project from './Components/ProjectFolder/Project';
import Contact from './Components/ContactFolder/Contact';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element = { <Home/> } />
          <Route path='/About' element = { <About/> } />
          <Route path='/Service' element = { <Service/> } />
          <Route path='/Project' element = { <Project/> } />
          <Route path='/Contact' element = { <Contact/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
