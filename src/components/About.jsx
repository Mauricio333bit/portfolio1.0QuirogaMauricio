import React from "react";
import TimeLine from "./TimeLine";

const About = () => {
  return (
    <div className="bg-[#232325] text-white " id="about">
      <div className="gap-4  max-w-[1200px]  flex items-center flex-col-reverse md:flex-row justify-center mx-auto p-4   ">
        <div className="  w-full text-center sm:text-start">
          <p className="text-gray-200 md:text-5xl sm:text-4xl text-3xl font-bold text-gray mt-4 mb-6">
            Sobre <span>mi</span>
          </p>

          <p className="text-md sm:text-2xl my-2 mb-3 text-gray-200">
            Actualmente estoy en el ultimo año de la Tecnicatura en Desarrollo
            de Software, tambien he concretado bootcamps de Programación de
            Oracle, JavaScript-FullSatck y Java-Spring en la agencia Codo a
            Codo.
          </p>
          <p className="text-[#ff8722] text-xl pb-4">
            Para mi la programación es una forma de arte, cada linea de codigo
            que escribo es una oportunidad de expresar mi creatividad. Disfruto
            el desafío constante de resolver problemas, lo que me impulsa a
            cultivar mis habilidades y descubrir soluciones ingeniosas...
          </p>
          <span className="text-4xl ">Experiencia</span>
          <TimeLine></TimeLine>
        </div>
      </div>
    </div>
  );
};

export default About;
