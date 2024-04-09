import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" text-gray-400 mt-3 flex justify-between items-center max-w-[1240px] mx-auto rounded-2xl px-4 h-[64px]">
      <h1 className=" text-3xl font-bold primary-color ml-4">Mauricio.dev</h1>
      <ul className="hidden md:flex gap-2 justify-center items-center text-xl ">
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
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "w-full absolute top-[80px] duration-700 left-0  bg-[#202021]"
            : "fixed left-[-100%] w-full top-[80px] duration-700  "
        }
      >
        <ul className=" md:hidden gap-2 flex flex-col py-2 justify-center items-center">
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
    </div>
  );
};

export default NavBar;
