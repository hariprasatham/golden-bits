import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

        useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true,    // Whether animation should happen only once - while scrolling down
        });
        AOS.refresh(); // Recalculate positions of AOS elements
      }, []);


  return <Home />
}

export default App
