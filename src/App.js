import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Nav/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App