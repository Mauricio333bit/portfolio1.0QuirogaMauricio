import React, { useState } from "react";
import reactIcon from "../assets/react.svg";
import javaIcon from "../assets/java.svg";
import jsIcon from "../assets/javascript.svg";
import bootstrapIcon from "../assets/bootstrap.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import ccsIcon from "../assets/css.svg";
import htmlIcon from "../assets/html5.svg";
import mysqlIcon from "../assets/mysql.svg";
import nodeIcon from "../assets/nodejs.svg";
import phpIcon from "../assets/php.svg";
import campusCeil from "../assets/campus.webp";
import appNotas from "../assets/appNotas.webp"
import avico from "../assets/avico.webp"
import bom from "../assets/bom.webp"
import cac from "../assets/cac.webp"
import clieAcc from "../assets/clieAcc.webp"
import lbo from "../assets/lbo.webp"
import lpPaula from "../assets/lpPaula.webp"
import rh from "../assets/rh.webp"
import rym from "../assets/rym.webp"


const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const projects = [
    {
      title: "Cuenta Cliente App",
      description:
        "Este proyecto fue desarrollado para construir una interfaz interactiva e intuitiva. Desde el se gestionan las cuentas de cliente de un empresa. Se crea un usuario a cada empleado de la empresa y se registran los movimientos que se realizan llevando dinamicamente los saldos de cada cuenta",
      img: clieAcc, // Uso directo de importaciones de imágenes
      link: "https://github.com/Mauricio333bit/ClientAccount",
      technologies: [reactIcon, tailwindIcon, htmlIcon],
    },
    {
      title: "La buena oferta, ecomerce",
      description:
        "Este proyecto fue hecho para brindar a la comunidad un sitio que centralice los porductos y servicios que ofrecen. Cada persona que desea se puede registrar y crear su propio comercio para vender su servicio/prpoducto. Participe principalmente en el desarrollo de la api, pero colabore en todo el proyecto.",
      img: lbo, // Uso directo de importaciones de imágenes
      link: "https://github.com/Mauricio333bit/ComercioDdS",
      technologies: [htmlIcon, ccsIcon, jsIcon, reactIcon,nodeIcon],
    },
    {
      title: "Campus CEIL",
      description:
        "Campus donde se mostraria la oferta educativa del instituto. Una seccion para administrador donde se cargan las ofertas, una pagina home donde se muestran y una vista de usuario para ver las catedras en las que estamos inscriptos.",
      img: campusCeil, // Uso directo de importaciones de imágenes
      link: "https://github.com/Mauricio333bit/CampusCEIL_PracticaProf",
      technologies: [htmlIcon, ccsIcon, bootstrapIcon,phpIcon,mysqlIcon],
    },
    {
      title: "Landing Page Business On Move",
      description:
        "Pagina web solicitada por un cliente en el que tuvimos reunion para definir el diseño y poder reflejear lo que deseaba.",
      img: bom, // Uso directo de importaciones de imágenes
      link: "https://github.com/Mauricio333bit/landing-page-BOM",
      technologies: [htmlIcon, ccsIcon, jsIcon],
    },
    {
      title: "App para gestion de Avicola",
      description:
        "Sistema para la gestion de pedidos y stock de una empresa que se dedica a la indrustria avicola. Se implemento Model MVC",
      img: avico,
      link: "https://github.com/Mauricio333bit/JAVAGestionAvicolaP2",
      technologies: [javaIcon],
    },
    {
      title: "Proyecto CaC",
      description:
        "Proyecto integrador donde aplicamos la manimpulacion del dom para hacer una pagina interactiva y conectada a base de datos",
      img: cac,
      link: "https://github.com/Mauricio333bit/1erProyectoIntegrador",
      technologies: [htmlIcon, ccsIcon, jsIcon,nodeIcon,mysqlIcon],
    },
    {
      title: "Landing Page Breast time of life",
      description:
        "Landing page solicitada por la Dr.Paula con el fin de poder informar acerca de sus principios y servicios",
      img: lpPaula, // Uso directo de importaciones de imágenes
      link: "https://github.com/Mauricio333bit/LP-BreastTimeOfLife",
      technologies: [htmlIcon, ccsIcon, jsIcon],
    },
    {
      title: "App Notas",
      description:
        "App para mensajeria aplicando mvc",
      img: appNotas, // Uso directo de importaciones de imágenes
      link: "https://ejemplo.com/proyecto1",
      technologies: [javaIcon],
    },
    {
      title: "App Rick and Morty",
      description:
        "Pagina con los personajes de la serie rick and morty que consume una api externa y permite una busqueda",
      img: rym, // Uso directo de importaciones de imágenes
      link: "https://ejemplo.com/proyecto1",
      technologies: [reactIcon,htmlIcon, ccsIcon],
    },
    {
      title: "App para gestion de rrhh",
      description:
        "Este proyecto fue desarrollado utilizando HTML, CSS y JavaScript para construir una interfaz interactiva. Implementé técnicas de diseño responsivo y optimización de recursos.",
      img: rh, // Uso directo de importaciones de imágenes
      link: "https://ejemplo.com/proyecto1",
      technologies: [reactIcon,htmlIcon, ccsIcon],
    },
  ];

  // Manejar navegación de proyectos
  const handlePrevious = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedProject = projects[selectedIndex];

  return (
    <div
      className="gap-4 max-w-[1200px] flex items-center flex-col justify-center mx-auto p-4"
      id="projects"
    >
      <div className="w-full text-center sm:text-start">
        <h2 className="text-gray-200 md:text-5xl sm:text-4xl text-3xl font-bold mt-4 mb-6">
          Mis <span>proyectos</span>
        </h2>
      </div>

      {/* Mostrar proyecto seleccionado */}
      <div className="text-center">
        <img
          src={selectedProject.img}
          alt={selectedProject.title}
          className="w-full max-w-md mx-auto rounded-lg aspect-square "
        />
        <h3 className="text-2xl text-pretty text-white font-semibold mt-4">{selectedProject.title}</h3>
        <p className="text-gray-400 mt-2">{selectedProject.description}</p>
        <a
          href={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline mt-2 inline-block"
        >
          Ver proyecto
        </a>
        <div className="flex justify-center gap-2 mt-4">
          {selectedProject.technologies.map((tech, index) => (
            <img key={index} src={tech} alt="Technology" className="w-8 h-8" />
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="flex gap-4 sm:absolute mx-4 justify-around w-full">
        <button
          onClick={handlePrevious}
          className=" bg-gray-700 text-gray-200 px-4 py-2 rounded-md hover:bg-gray-600"
        >
          {"<"}
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-700 text-gray-200 px-4 py-2 rounded-md hover:bg-gray-600"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
