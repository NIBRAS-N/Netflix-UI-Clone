import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
// import dotenv from "dotenv"
// import './components/Home/Home.scss'
function App() {
  // dotenv.config()
  return (
    <>
      <Router>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
