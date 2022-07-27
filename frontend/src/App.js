import SignupUser from './views/SignupUser';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Superlady_ from './test/superlady';
import { ScrollToTop } from './components/scroll-to-top'
import Home from './routes/home'
import About from './routes/about'
import Contact from './routes/contact'
import User from './routes/user'
import Admin from './routes/admin'
import Superlady from './routes/superlady'



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="/test/superlady" element={<Superlady_ />} />

          <Route path="userlogin" element={<User />} />
          <Route path="adminlogin" element={<Admin />} />
          <Route path="superladylogin" element={<Superlady />} />




        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
