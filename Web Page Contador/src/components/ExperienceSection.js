import React from 'react';

const ExperienceSection = () => {
  const experienceItems = [
    {
      year: "2015-Presente",
      title: "Asesor Fiscal Independiente",
      description: "Consultoría especializada para PYMES y profesionales independientes"
    },
    {
      year: "2012-2015",
      title: "Contador Senior",
      description: "Coordinación de equipos contables en firma internacional"
    },
    {
      year: "2008-2012",
      title: "Auditor Tributario",
      description: "Revisión de cumplimiento fiscal en diversas industrias"
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Experiencia Profesional</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Más de 14 años de trayectoria en el ámbito fiscal y contable</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 left-4 h-full w-0.5 bg-gray-300 md:left-1/2 md:-ml-1"></div>
            {experienceItems.map((item, index) => (
              <div key={index} className="relative mb-12">
                <div className={`flex flex-col md:flex-row ${index % 2 ? 'md:flex-row-reverse' : ''} items-center`}>
                  <div className={`md:w-5/12 ${index % 2 ? 'md:pr-8' : 'md:pl-8'} mb-6 md:mb-0`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <span className="text-teal-500 font-medium">{item.year}</span>
                      <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="md:w-2/12 flex justify-center">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-md">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className={`md:w-5/12 ${index % 2 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;