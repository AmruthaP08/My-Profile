import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Education from './components/Education';
import Contact from './components/Contact';
import './components/Common.css'
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="Display">
      
      <BrowserRouter>
      <Header />
        <Routes>
          
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/skill' element={<Skill />}/>
          <Route exact path='/edu' element={<Education />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;

