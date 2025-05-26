import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Blog from './Pages/New';
import Collections from './Pages/Collections';
import Contact from './Pages/Contact';

const MainApp = () => {
  return (
    <>
    <HashRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<Shop/>}/>
            <Route path='/' element={<Blog/>}/>
            <Route path='/' element={<Collections/>}/>
            <Route path='/' element={<Contact/>}/>
        </Routes>
    </HashRouter>
    </>
  )
}

export default MainApp