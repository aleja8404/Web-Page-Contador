import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Cristian Osias Serna <br/>
              <span className="text-teal-500">Especialista Fiscal</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Asesoría profesional en gestión tributaria y contable para optimizar tus finanzas
            </p>
            <div className="mt-8">
              <a href="#contacto" className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 inline-block mr-4">
                Contactar
              </a>
              <a href="#servicios" className="border border-teal-500 text-teal-500 font-medium py-3 px-8 rounded-lg hover:bg-teal-50 transition duration-300 inline-block">
                Servicios
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m2 10H7m2-10v10m6-10v10m4-13a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h4l2-2h6l2 2h4z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;