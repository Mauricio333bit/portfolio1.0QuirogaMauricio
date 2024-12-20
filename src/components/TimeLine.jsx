import React from "react";

const TimeLine = () => {

  const experiences= [
    {date:"Diciembre 2023",tittle:"Pasantias-Desarrollador Backend- Underc0de",description:"Fui parte del equipo backend"},
    {date:"Fenbrero",tittle:"Pasantias-Desarrollador Backend- Underc0de",description:"Fui parte del equipo backend"},
    {date:"Fenbrero",tittle:"Pasantias-Desarrollador Backend- Underc0de",description:"Fui parte del equipo backend"},
    {date:"Fenbrero",tittle:"Pasantias-Desarrollador Backend- Underc0de",description:"Fui parte del equipo backend"},
    {date:"Diciembre 2023",tittle:"Desarrollador FrontEnd-Bussines On Move",description:"Ralicé una landing page responsiva utilizando HTML, CSS y Bootstrap para mejorar la estética y la experiencia de usuario"},
  ]



  return (
    <div className="pt-6">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        
        {experiences.map(exp=>{
          return(
            <li key={exp.tittle} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {exp.date}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {exp.tittle}
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {exp.description}
          </p>
        </li>
          )
        })}
        
       
      </ol>
    </div>
  );
};

export default TimeLine;
