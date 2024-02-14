import React from 'react';
import NavBar from './components/NavBar'; // Asegúrate de que la ruta sea correcta
import WelcomeSection from './components/WelcomeSection';
import PhotoGallery from './components/PhotoGallery';
import OurStory from './components/OurStory';
import LoveLetters from './components/LoveLetters';
// Importa cualquier otro componente que hayas creado

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <WelcomeSection />
        <PhotoGallery />
        <OurStory />
        <LoveLetters />
        {/* Coloca aquí otros componentes */}
      </main>
    </div>
  );
};

export default App;
