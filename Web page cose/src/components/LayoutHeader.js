import React from 'react';

const LayoutHeader = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0N9IF9Qd8ASzOYnuUx9evHl1k3cs0iWKGPRJ7" 
              alt="Logo COSE"
              className="h-12 mr-3"
            />
            <div className="text-2xl font-bold text-gray-800">
              <span className="text-teal-400">COSE</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#servicios" className="text-gray-600 hover:text-teal-500 transition-colors">Servicios</a>
            <a href="#experiencia" className="text-gray-600 hover:text-teal-500 transition-colors">Experiencia</a>
            <a href="#contacto" className="text-gray-600 hover:text-teal-500 transition-colors">Contacto</a>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;

// DONE