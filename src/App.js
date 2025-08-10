import React from 'react';
//IMPORT COMPONENTS
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
// IMPORT ROUTER
import { BrowserRouter as Router } from 'react-router-dom';
//IMPORT MOTION
import { motion } from 'framer-motion';


const App = () => {
  return (
    
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  )
  
};

export default App;
