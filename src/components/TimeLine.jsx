import React from "react";

const TimeLine = () => {
  return (
    <div className="pt-6">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Febrero 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Freelance-Desarrollador FrontEnd-Sonus Systems
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Rediseñe la pagina web de la empresa usando React y Tailwind
            enfocandome en mejorar la accesibilidad, responsividad y seo.
            Realice componentes atractivos buscando mantener la esencia del
            cliente.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Diciembre 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Freelance-Desarrollador FrontEnd-Bussines On Move
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Desarrollé una landing page responsiva utilizando HTML, CSS y
            Bootstrap para mejorar la estética y la experiencia de usuario con
            el fin de atraer más u
          </p>
        </li>
      </ol>
    </div>
  );
};

export default TimeLine;
