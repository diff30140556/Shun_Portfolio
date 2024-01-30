import React from 'react';
import Header from './components/Header'
import CoverSection from './pages/CoverSection'
import AboutSection from './pages/AboutSection';
import ProjectSection from './pages/ProjectSection';
import ExpSection from './pages/ExpSection';
import ContactSection from './pages/ContactSection';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="wrap w-full bg-gradient">
      <header className="header">
        <Header></Header>
      </header>
        <CoverSection></CoverSection>
        <AboutSection></AboutSection>
        <ExpSection></ExpSection>
        <ProjectSection></ProjectSection>
        <ContactSection></ContactSection>
        <Footer></Footer>
    </div>
  );
}

export default App;
