import Navbar from './components/Header.js';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Products from './pages/Products.js';
import News from './pages/News.js';
import Services from './pages/Services.js';
import Partners from './pages/Partners.js';
import Contact from './pages/Contacts.js';


function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path='/about' element= {<About/>} />
           <Route path='/projects' element= {<Projects/>} />
           <Route path='/products' element= {<Products/>} />
           <Route path='/news' element= {<News/>} />
           <Route path='/services' element= {<Services/>} />
           <Route path='/partners' element= {<Partners/>} />
           <Route path='/contact' element= {<Contact/>} />

        </Routes>
        <Footer/>
      </Router>      
    
  );
}

export default App;
