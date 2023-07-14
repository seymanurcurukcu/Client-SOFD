import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Forex from './pages/forex/Forex';
import Viop from './pages/viop/Viop';
import Borsa from './pages/borsa/Borsa';
import Opsiyon from './pages/opsiyon/Opsiyon';



function App() {

  return (
   
    <div>

      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/viop" element={<Viop />} />
          <Route path="/borsa" element={<Borsa />} />
          <Route path="/opsiyon" element={<Opsiyon />} />
          <Route path="/iletişim" element={<Contact />} />
          <Route path="/kurumsal" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    
    </div>      
    
  )
}

export default App
