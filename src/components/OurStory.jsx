import React from 'react';

// Suponiendo que tienes una lista de momentos importantes en tu relación
const storyEvents = [
    {
        date: 'Ya hace muchos años :)',
        title: 'Cómo nos conocimos',
        description: 'Nuestra historia comenzó hace varios años, aunque inicialmente no capturaste toda mi atención. Sin embargo, algo cambió radicalmente en 2021 cuando te vi nuevamente. De repente, capturaste mi interés de una manera que no esperaba. Hice esfuerzos por acercarme, a pesar de que parecías mantener una distancia. Intenté convencerme de que debía renunciar a la idea, pero a medida que los días transcurrían, encontraba imposible dejarte de pensar. Desde ese momento, valoro y recuerdo cada instante compartido contigo; cada diálogo, cada risa que hemos disfrutado juntos. Cada cruce de miradas hacía que mi corazón acelerara, revelándome que estábamos viviendo algo genuinamente extraordinario. Cada uno de tus gestos, cada sonrisa, cada mirada tuya, se transformaron en las luces que guiaban mis días, iluminándolos como estrellas en el cielo nocturno.',
        imageUrl: '/draws/15.jpeg',
    },
    {
        date: 'La vez que fuimos a dar una vuelta despues del futbol',
        title: 'Nuestra primera cita',
        description: 'La primera vez que salimos, estaba nervioso y no sabia que hiba a pasar, recuerdo cada detalle de esa cita y a pesar de que ya paso mucho tiempo todavia me sigo poniendo nervioso cada vez que salimos  El día de nuestro primer beso o nuestra primera salida juntos, mis nervios estaban en su punto más alto. Fue en esos instantes, en medio de las risas y las miradas compartidas, que me di cuenta de cuán profundamente me afectabas.',
        imageUrl: '/draws/14.jpeg',
    },
    {
        date: 'Lo sigo haciendo todos los dias',
        title: 'Me enamore de ti',
        description: 'Es la forma en que me inspiras a ser mejor, a alcanzar metas que antes solo soñaba. Tu vez en mi cosas que ni yo miro en mí, y eso me motiva a superarme constantemente. Y aunque no lo puedo explicar, se con certeza que tu eres la razon por la que mi mundo se ilumina de una manera unica y hermosa',
        imageUrl: '/draws/16.jpeg',
    },
    // Añade más eventos según sea necesario
];

const OurStory = () => {
    return (
        <div id="story" className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Nuestra Historia</h2>
                {storyEvents.map((event, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center mb-8`}>
                        <img src={event.imageUrl} alt={event.title} className="w-full lg:w-1/2 rounded-lg shadow-lg mb-4 lg:mb-0 mx-4" />
                        <div className="w-full lg:w-1/2 mx-4">
                            <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                            <p className="text-gray-700 mb-2"><strong>{event.date}</strong></p>
                            <p className="text-gray-600">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurStory;
