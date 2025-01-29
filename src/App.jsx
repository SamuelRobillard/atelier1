import { BrowserRouter, Routes, Route } from 'react-router-dom';


import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './navbar/Footer';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ListUserAxios from './pages/ListUserAxios';
import ListUserFetch from './pages/ListUserFetch';
import Inscription from './pages/Inscription';
import Modification from './pages/Modification';
import Suppression from './pages/Suppression';

function App(props) {
  const newLocal = <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/listAxios" element={<ListUserAxios />} />
    <Route path="/listFetch" element={<ListUserFetch />} />
    <Route path="/options/1" element={<Inscription />} />
    <Route path="/options/2" element={<Modification />} />
    <Route path="/options/3" element={<Suppression />} />
    <Route path="*" element={<NotFound />} />
  </Routes>;
  return (

    <BrowserRouter>
      <Navbar/>
      <div className="position-absolute top-50 start-50">
        {newLocal}
        
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;