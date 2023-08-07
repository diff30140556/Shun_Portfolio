import React from 'react';
import Header from './components/Header'
import CoverSection from './pages/CoverSection'
import AboutSection from './pages/AboutSection';

function App() {
  return (
    <div className="wrap w-full bg-black">
      <header className="header">
        <Header></Header>
      </header>
        <CoverSection></CoverSection>
        <AboutSection></AboutSection>
    </div>
  );
}

export default App;
