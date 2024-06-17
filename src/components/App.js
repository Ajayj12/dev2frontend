
import './App.css';
import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import UserLogin from './UserLogin';
import Signup from './Signup';
import Header from './Header';
import DashBoard from './DashBoard';
import AdminLogin from './AdminLogin';
import LdashBoard from './LdashBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path='/userlogin' element={<UserLogin/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='header' element = {<Header/>}/>
       <Route path='/' element={<DashBoard/>}/>
       <Route path='/adminlogin' element={<AdminLogin/>}/>
       <Route path='/ldashboard' element={<LdashBoard/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
