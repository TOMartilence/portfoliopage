
import React from 'react';
import { Navbar } from './components/Navbar';
import Skills from './components/Skills';
import Banner from './components/Banner';
import Confirmation from './components/Confirmation';
import Footer from './components/Footer';
import Hardskills from "./components/Hardskills";
import Contact from './components/Contact';
import Projects from './components/Projects'; // Import Projects component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';

function App() {
  const skillsData = [
    { name: 'English-Spoken', percentage: 80 },
    { name: 'English-Written', percentage: 93 },
    { name: 'CGPA', percentage: 92.1 },
    { name: 'Business-Communication', percentage: 70 },
    { name: "Japanese", percentage: 10 },
    { name: "Management-Abilities", percentage: 65 },
    { name: "On-Stage-Speech", percentage: 80 }
  ];

  const [result, setResult] = useState("");

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Banner />
          <Skills skillsData={skillsData} />
          <Hardskills />
          <Contact setResult={setResult} />
          <Confirmation result={result} />
          <Footer />
        </div>
        <Routes>
          <Route path='/projects' element={<Projects />} /> 
        </Routes>
      </Router>
    </>
  );
}


export default App;
