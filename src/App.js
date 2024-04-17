import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome.js";
import Signin from "./components/Signin.js";
import Register from "./components/Register.js";
import Dashboard from "./components/Dashboard.js";
import CaseFiling from "./components/CaseFiling.js";
import Queries from "./components/Queries.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Welcome />} />
        <Route index path='/signin' element={<Signin />} />
        <Route index path='/register' element={<Register />} />
        <Route index path='/dashboard' element={<Dashboard />} />
        <Route index path='/case-filing/case-details' element={<CaseFiling />} />
        <Route index path='/queries' element={<Queries />} />
      </Routes>
    </Router>
  );
}

export default App;
