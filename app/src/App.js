import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
