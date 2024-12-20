import React, { useState } from "react";
import proj1 from "../assets/proj1.png";
import proj3 from "../assets/proj3.jpg";
import htlm from "../assets/html5.svg";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const projects = [
    {
      title: "Proyecto 1",
      description:
        "Este proyecto fue desarrollado utilizando HTML, CSS y JavaScript para construir una interfaz interactiva. Implementé técnicas de diseño responsivo y optimización de recursos.",
      img: proj1, // Uso directo de importaciones de imágenes
      link: "https://ejemplo.com/proyecto1",
      technologies: [htlm, "../assets/css.svg", "../assets/javascript.svg"],
    },
    {
      title: "Proyecto 2",
      description:
        "Desarrollé una aplicación web usando React y Spring Boot, que incluye funcionalidades avanzadas como autenticación y manejo de estados globales.",
      img: proj3,
      link: "https://ejemplo.com/proyecto2",
      technologies: ["react.svg", "../assets/spring.svg"],
    },
    {
      title: "Proyecto 3",
      description:
        "Construí un sistema de gestión de base de datos utilizando MySQL y una API backend con Java, asegurando un rendimiento eficiente.",
      img: proj1,
      link: "https://ejemplo.com/proyecto3",
      technologies: ["../assets/mysql.svg", "../assets/java.svg"],
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
          className="w-full max-w-md mx-auto rounded-lg"
        />
        <h3 className="text-xl font-semibold mt-4">{selectedProject.title}</h3>
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
      <div className="flex gap-4 mt-6">
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
