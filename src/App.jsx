import './components/main.css';
import './courses/courses.css';
import './signup/sign.css';
import React, { useState } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
 import Footer from './components/footer';
import Courses from './components/courses';
import About from './components/about';
import Contact from './components/contact';
import BCom from './courses/bcom';
import BCA from './courses/bca';
import BBA from './courses/bba';
import BSC from './courses/bsc';
import Signup from './signup/signup';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  return (
    <>
      <div>
        <Navbar setActiveComponent={setActiveComponent} />
        {activeComponent === 'home' && <Home setActiveComponent={setActiveComponent} />}
         {activeComponent === 'about' && <About />}
        {activeComponent === 'course' && <Courses setActiveComponent={setActiveComponent} />}
        {activeComponent === 'contact' && <Contact />}
        {activeComponent === 'signup' && <Signup />}
          {activeComponent === 'bcom' && <BCom setActiveComponent={setActiveComponent} />}
        {activeComponent === 'bca' && <BCA setActiveComponent={setActiveComponent} />}
        {activeComponent === 'bba' && <BBA setActiveComponent={setActiveComponent} />}
        {activeComponent === 'bsc' && <BSC setActiveComponent={setActiveComponent} />}

 


      </div>
      <Footer  setActiveComponent={setActiveComponent}  />
    </>
  );
}

export default App;