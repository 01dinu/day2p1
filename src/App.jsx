import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';

const App = () => {
  return (
    <Router>
    <div className="App">
      
      <Header />
      <Home />
      
     
    </div>
      
    
  </Router>
  );
};

export default App;