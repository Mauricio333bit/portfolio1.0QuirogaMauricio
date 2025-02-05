import React from "react";
import SlideIn from "../utils/slideIn";

const TimeLine = () => {
  const experiences = [
    {
      date: "Octubre 2024",
      title: "Desarrollador Backend - Underc0de",
      description: "Fui parte del equipo backend para desarrollar una aplicación web que gestiona partidos de fútbol. Aporté en el diseño del sistema y el desarrollo de la API. Usamos Node, Express, MongoDB.",
      url: "https://underc0de.example.com",
      hasButton: false,
    },
    {
      date: "Septiembre 2024",
      title: "Desarrollador FrontEnd - Ganapan",
      description: "Desarrollé interfaces pertenecientes a la vista móvil en la aplicación para mozos, con el objetivo de mejorar la gestión de comandas mediante vistas simples e intuitivas. Utilicé React, Tailwind, Redux Toolkit y Axios.",
      url: "https://www.ganapan.com.ar/",
      hasButton: true,
    },
    {
      date: "Agosto 2024",
      title: "Desarrollador Full Stack - Urbanismo",
      description: "Colaboré en el desarrollo de un sistema web, participando en el diseño del sistema, las interfaces del front para la landing page y las vistas de administrador. También participé en el desarrollo de la API y el despliegue. Utilizamos Node, Express, PostgreSQL, React, Tailwind, Zustand y Axios.",
      url: "https://inmobiliariaurbanismo.com.ar/",
      hasButton: true,
    },
    {
      date: "Marzo 2024",
      title: "Desarrollador Full Stack - Open Mind",
      description: "Colaboré en el desarrollo de un sistema web, participando en el diseño del sistema, las interfaces del front para la landing page y las vistas de administrador. También participé en el desarrollo de la API y el despliegue. Utilizamos Node, Express, PostgreSQL, React, Tailwind, Zustand y Axios.",
      url: "https://openmindinmobiliaria.com.ar/",
      hasButton: true,
    },
    {
      date: "Febrero 2024",
      title: "Desarrollador FrontEnd - Sonus Systems",
      description: "Participé en el rediseño de la página web de la empresa. Usando React y Tailwind, logramos mejorar la accesibilidad, responsividad y SEO. El objetivo era crear componentes atractivos manteniendo la esencia del cliente.",
      url: "https://sonussystems.com/",
      hasButton: true,
    },
    {
      date: "Diciembre 2023",
      title: "Desarrollador FrontEnd - Business On Move",
      description: "Realicé una landing page responsiva utilizando HTML, CSS/Bootstrap para mejorar la estética y la experiencia de usuario.",
      url: "https://businessonmove.com/",
      hasButton: true,
    },
  ];

  return (
    <div className="pt-6">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiences.map((exp, index) => (
          <SlideIn delay={0.8} key={index}>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {exp.date}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {exp.description}
              </p>
              {exp.hasButton && (
                <button
                  onClick={() => window.open(exp.url, "_blank")}
                  className="px-3 py-1 text-sm text-white rounded-lg "
                >
                  Visitar
                </button>
              )}
            </li>
          </SlideIn>
        ))}
      </ol>
    </div>
  );
};

export default TimeLine;
