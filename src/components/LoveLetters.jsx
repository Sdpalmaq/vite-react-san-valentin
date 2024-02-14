import React from 'react';

// Suponiendo que tienes una lista de cartas o mensajes
const loveLetters = [
    {
        id: 1,
        title: 'Carta 1',
        date: '14 de Febrero, 2023',
        message: 'No se bailar, pero quiero sacarte a bailar. Nunca reme un bote, pero quiero cruzar ese lago, y llevarte a un picnic. quiero prosperar y aprender nuevas cosas de ti. Jamas supé como rezar, pero estoy orando como nunca, por nosotros.',
    },
    {
        id: 2,
        title: 'Carta 2',
        date: 'Como comenzo',
        message: 'Y pensar que todo comenzo con un "Hola", ahora eres lo más lindo que tengo y no pienso perderte jamás.',
    }, 
    {
        id: 3,
        title: 'Carta 3',
        date: 'Mi amor presiosa',
        message: 'Quiero decirte que te amo porque mi amor es como el mar, se ve al inicio pero no el final.Desde que estoy contigo mi vida cambio. Amor perdoname si mis actitudes te hacen pensar que no me importas, tu eres lo mejor que me ha podido pasar porque encontre a la persona que más amo en el mundo---------------TE AMO DEMASIADO',
    },
    // Añade más cartas o mensajes según sea necesario
];

const LoveLetters = () => {
    return (
        <div id="loveletters" className="py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Cartas de Amor</h2>
                <div className="space-y-8">
                    {loveLetters.map((letter) => (
                        <div key={letter.id} className="bg-white shadow overflow-hidden rounded-lg px-6 py-4">
                            <h3 className="text-xl font-semibold text-pink-600">{letter.title}</h3>
                            <p className="text-md text-gray-500">{letter.date}</p>
                            <p className="mt-4 text-gray-700 whitespace-pre-line">{letter.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LoveLetters;
