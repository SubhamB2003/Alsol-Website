import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Footer = lazy(() => import('./Components/Footer/Footer'));
const Navbar = lazy(() => import('./Components/Nav/Navbar'));
const About = lazy(() => import('./Pages/About'));
const Career = lazy(() => import('./Pages/Career'));
const Home = lazy(() => import('./Pages/Home'));
const Service = lazy(() => import('./Pages/Service'));
const Testimonial = lazy(() => import('./Pages/Testimonial'));
const WebdevService = lazy(() => import('./Pages/WebdevService'));


function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/webdev" element={<WebdevService />} />
            <Route path="/career" element={<Career />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App