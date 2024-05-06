import React from 'react'
import "./App.css"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Donate from "./Components/Donate";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/donate' element={<Donate/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
        <ToastContainer position="top-center"/>
      </Router>
    </div>
  )
}

export default App
