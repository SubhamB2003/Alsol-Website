import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CareerForm from './Pages/CareerForm';
import Contact from './Pages/Contact';

const Footer = lazy(() => import('./Components/Footer/Footer'));
const Navbar = lazy(() => import('./Components/Nav/Navbar'));
const About = lazy(() => import('./Pages/About'));
const Career = lazy(() => import('./Pages/Career'));
const Home = lazy(() => import('./Pages/Home'));
const Service = lazy(() => import('./Pages/Service'));
const Testimonial = lazy(() => import('./Pages/Testimonial'));
const WebdevService = lazy(() => import('./Pages/WebdevService'));
const Blog = lazy(() => import('./Pages/Blog'));


function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<p className='text-xl font-semibold p-4 text-center font-serif'>Loading...</p>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/webdev" element={<WebdevService />} />
            <Route path="/career" element={<Career />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career/apply" element={<CareerForm />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App