import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-3">
              <span className="text-teal-400">COSE</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Cristian Osias Serna Chaverra <br/>
              Contador Público Especializado
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#experiencia" className="text-gray-400 hover:text-white transition-colors">Experiencia</a></li>
                <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de privacidad</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de servicio</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} COSE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;