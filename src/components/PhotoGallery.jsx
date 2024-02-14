import React from 'react';

// Ejemplo de lista de URLs de imágenes. Reemplaza esto con tus propias imágenes.
const images = [
  '/images/1.jpeg',
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/4.jpeg',
  '/images/5.jpeg',
  '/images/6.jpeg',
  '/images/7.jpeg',
  '/images/8.jpeg',
  '/images/9.jpeg',
  '/images/10.jpeg',
  '/images/11.jpeg',
  '/images/12.jpeg',
  '/images/13.jpeg',
  '/images/14.jpeg',
  '/images/15.jpeg',
  '/images/16.jpeg',
  '/images/17.jpeg',
  '/images/18.jpeg',
  '/images/19.jpeg',
  '/images/20.jpeg',
  '/images/21.jpeg',
  '/images/22.jpeg',
  '/images/23.jpeg',
  '/images/24.jpeg',
   
  // Añade más URLs de imágenes según sea necesario
];

const PhotoGallery = () => {
  return (
    <div id="gallery" className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestra Galería de Fotos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image} alt={`Memoria ${index + 1}`} className="w-full h-auto transform hover:scale-105 transition duration-300 ease-in-out"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
