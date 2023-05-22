import React from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './Components/LoginScreen';
import {SignUpScreen ,sendData}from './Components/SignUpScreen';

function App() {
  const user = {
    Email:'harshit'
  }
  return (
    <div className="app">
    {!user?
    (<LoginScreen/>):
    (<Router>
        <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route exactpath="/about" element={<h1>This is about</h1>} />
      </Routes>
    </Router>)}
        
    </div>
  );
}

export default App;
