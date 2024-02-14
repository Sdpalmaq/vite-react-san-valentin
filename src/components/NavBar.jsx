import React, { useState } from 'react';

const NavBar = () => {
    // Estado para controlar la visibilidad del menú móvil
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Función para alternar el estado del menú móvil
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-pink-500 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* Logo o nombre del sitio */}
                        <div>
                            <a href="#" className="flex items-center py-5 px-2 text-white">
                                {/* <img src="path/to/logo" alt="Logo" className="h-8 w-8 mr-2" /> */}
                                <span className="font-bold">Nuestro Amor</span>
                            </a>
                        </div>
                        {/* Links de navegación */}
                        <div className="hidden md:flex items-center space-x-1">
                            {/* Resto de los enlaces */}
                            <a href="#welcome" className="py-5 px-3">Inicio</a>
                            <a href="#gallery" className="py-5 px-3">Galería</a>
                            <a href="#story" className="py-5 px-3">Nuestra Historia</a>
                            <a href="#messages" className="py-5 px-3">Mensajes</a>
                        </div>
                    </div>
                    {/* Botón de menú móvil */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMobileMenu} className="mobile-menu-button">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Menú móvil */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                {/* Enlaces del menú móvil */}
                <a href="#welcome" className="block py-2 px-4 text-sm hover:bg-pink-700">Inicio</a>
                <a href="#gallery" className="block py-2 px-4 text-sm hover:bg-pink-700">Galería</a>
                <a href="#story" className="block py-2 px-4 text-sm hover:bg-pink-700">Nuestra Historia</a>
                <a href="#messages" className="block py-2 px-4 text-sm hover:bg-pink-700">Mensajes</a>

            </div>
        </nav>
    );
};

export default NavBar;
