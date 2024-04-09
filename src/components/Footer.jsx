import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 By Quiroga Mauricio
        </span>
        <ul className="hidden md:flex gap-2 justify-center items-center text-gray-500 sm:text-center dark:text-gray-400 ">
          <li className="p-2 hover:border-b-2 hover:border-[#ff8722]">
            <a href="#home">Inicio</a>
          </li>
          <li className="p-2 hover:border-b-2 hover:border-[#ff8722]">
            <a href="#about">Sobre mi</a>
          </li>
          <li className="p-2 hover:border-b-2 hover:border-[#ff8722]">
            <a href="#projects">Proyectos</a>
          </li>
          <li className="p-2 hover:border-b-2 hover:border-[#ff8722]">
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
