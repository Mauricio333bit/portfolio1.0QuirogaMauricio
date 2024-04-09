import React, { useState } from "react";
import proj1 from "../assets/proj1.png";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4); // inicialmente mostrar 2 proyectos
  const projects = [
    // tu arreglo de proyectos aquí
    proj1,
    proj1,
    proj1,
    proj1,
    proj1,
    proj1,
    proj1,
    proj1,
  ];

  const projectChunks = projects.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  const showMoreProjects = () => {
    setVisibleProjects(visibleProjects + 2); // mostrar 2 proyectos más
  };

  return (
    <div
      className="gap-4 max-w-[1200px] flex items-center flex-col justify-center mx-auto p-4"
      id="projects"
    >
      <div className=" w-full text-center sm:text-start ">
        <h2 className="text-gray-200 md:text-5xl sm:text-4xl text-3xl font-bold text-gray mt-4 mb-6">
          Mis <span>proyectos</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-4">
        {projectChunks
          .slice(0, visibleProjects / 2)
          .map((chunk, chunkIndex) => (
            <React.Fragment key={chunkIndex}>
              {chunk.map((project, index) => (
                <a
                  key={`${chunkIndex}-${index}`}
                  href="/"
                  className=" group overflow-hidden rounded-3xl"
                >
                  <img
                    src={project}
                    alt="proyecto1"
                    loading="lazy"
                    className=" inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110 rounded-3xl"
                  />
                </a>
              ))}
            </React.Fragment>
          ))}
      </div>
      {visibleProjects < projects.length && (
        <button
          onClick={showMoreProjects}
          className=" text-white font-bold py-2 px-4 rounded mt-4"
        >
          Mostrar más
        </button>
      )}
    </div>
  );
};

export default Projects;
