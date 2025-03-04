import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  
} from "react-icons/ai";
import profilePhoto from "../assets/pr.png";
import reactIcon from "../assets/react.svg";
import javaIcon from "../assets/java.svg";
import jsIcon from "../assets/javascript.svg";
import bootstrapIcon from "../assets/bootstrap.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import ccsIcon from "../assets/css.svg";
import nodeIcon from "../assets/nodejs.svg";
import htmlIcon from "../assets/html5.svg";
import mysqlIcon from "../assets/mysql.svg";
import cvPDF from '../assets/CV-QUIROGA-FullStack-Dev.pdf'

const Hero = () => {
  return (
    <div id="home">
      <div className="gap-4  max-w-[1200px]  flex items-center flex-col-reverse md:flex-row justify-center mx-auto p-4   ">
        <div className=" md:w-3/5 w-full text-center sm:text-start">
          <p className="text-gray-200 md:text-4xl sm:text-3xl text-2xl font-bold text-gray">
            Hola! Soy Mauricio 👋🏽
          </p>
          <h1 className=" sm:text-5xl text-3xl font-bold md:pt-6 md:pb-4  aspect-auto md:aspect-[24/9] lg:aspect-auto primary-color   ">
           
            Desarrollador de Software
          </h1>
          <p className="text-xl sm:text-4xl my-2 mb-3 text-gray-200">
            +2 años programando
          </p>
          <div className="flex gap-3 text-[#ff8722] justify-center sm:justify-start">
            <a href="https://github.com/Mauricio333bit"><AiFillGithub className="size-16 icon"></AiFillGithub></a>
            <a href="https://www.linkedin.com/in/mauricio-quiroga-7b8b00246/"><AiFillLinkedin className="size-16 icon"></AiFillLinkedin></a>
          </div>
          <div className="flex gap-2 my-8 text-gray-300 items-center flex-col sm:flex-row">
            Tech Stack |
            <div className="flex gap-2">
              <img src={htmlIcon} alt="html icon" className="icon size-9" />
              <img src={ccsIcon} alt="css icon" className="icon size-9" />
              <img src={jsIcon} alt="js icon" className="icon size-9" />
              <img
                src={tailwindIcon}
                alt="tailwind icon"
                className="icon size-9"
              />
              <img
                src={bootstrapIcon}
                alt="bootstrap icon"
                className="icon size-9"
              />
              <img src={reactIcon} alt="react icon" className="icon size-9" />
            </div>
            <div className="flex gap-2">
            <img
                src={nodeIcon}
                alt="tailwind icon"
                className="icon size-9"
              />
              <img src={javaIcon} alt="java icon" className="icon size-9" />
              <img src={mysqlIcon} alt="html icon" className="icon size-9" />
            </div>
          </div>
          <button className="w-[250px] mx-auto">
  <a 
    href={cvPDF} 
    download="CV_MauricioQuiroga-Dev.pdf"
    className="block w-full"
  >
    Descargar CV
  </a>
</button>
        </div>
        <div className="my-auto p-5">
          <img
            className="w-[250px] sm:w-[380px] mx-auto img-profile"
            src={profilePhoto}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
