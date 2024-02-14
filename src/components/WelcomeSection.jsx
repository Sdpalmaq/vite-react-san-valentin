import React from 'react';

const WelcomeSection = () => {
    return (
        <div id="welcome" className="bg-pink-100 text-gray-800 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-5xl font-bold mb-8">Feliz Día de San Valentín, Mi Amor!</h1>
                    <p className="text-xl mb-8">Cada día a tu lado es un regalo, y hoy quiero celebrar nuestro amor y la felicidad que me brindas. Espero que esta pequeña sorpresa llene tu corazón de alegría tanto como tú llenas el mío.</p>
                    <a href="#gallery" className="inline-block bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-700 transition duration-300">Explora Nuestros Recuerdos</a>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;
