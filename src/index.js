import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import Home from './Pages/Home';
import AboutMovies from './Pages/AboutMovies';
import ListMovies from './Pages/ListMovies';
import NotFound from './Pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/movies' element={<ListMovies />} />
        <Route path='/movies/about/:id' element={<AboutMovies />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
