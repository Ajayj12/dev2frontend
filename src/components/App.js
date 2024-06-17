
import './App.css';
import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import UserLogin from './UserLogin';
import Signup from './Signup';
import Header from './Header';
import DashBoard from './DashBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path='/userlogin' element={<UserLogin/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='header' element = {<Header/>}/>
       <Route path='/' element={<DashBoard/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
