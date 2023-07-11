import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
// import Home from './pages/home/Home';
// import Contact from './pages/contact/Contact';
// import About from './pages//about/About';
import WebSocketExample from './websocket';



function App() {

  return (
   
    <div>
       <WebSocketExample/>
      
      {/* <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer /> */}
     
    </div>      
    
  )
}

export default App
