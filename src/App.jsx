import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css";
import './App.css'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Skills from './components/Skills.jsx'
import Project from './components/Project.jsx'
import Home from './components/Home.jsx';
function App() {
  useEffect(()=>{
    AOS.init({duration: 1000});
},[])
  return (
    <>
    
     <BrowserRouter>
     <div id='home' className='bg-black w-screen h-screen text-white' style={{
          backgroundImage: "url('./me2.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
    <Navbar/>

    <Home/>
      </div>  
      <div id='about' className='w-screen  bg-black text-white'>
      <About/>
      </div>
      <div id='education' className='w-screen bg-black text-white'>
      <Education/>
      <div id='skills' className='w-screen h-screen bg-black text-white'>
      <Skills />
      </div>
      </div>

      <div id='exp' className='w-screen h-screen bg-black text-white'>
      <Project/>
      </div>
      <div id='contact' className='w-screen h-screen bg-black text-white'>
      <Contact/>
      
      </div>
     
        </BrowserRouter>
   
    </>
  )
}

export default App

  