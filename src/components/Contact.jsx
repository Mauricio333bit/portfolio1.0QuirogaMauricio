import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#232325] text-white" id="contact">
      <div className="gap-4  max-w-[1200px]  flex items-center flex-col  justify-center mx-auto p-4   ">
        <div className="  w-full text-center sm:text-start">
          <p className="text-gray-200 md:text-5xl sm:text-4xl text-3xl font-bold text-gray mt-4 mb-6">
            <span>Contáctame</span>
          </p>
        </div>
        <form
          action="https://getform.io/f/nbdorgga"
          method="POST"
          className="w-full"
        >
          <div className="w-full flex gap-6">
            <div className="form__group field w-1/2">
              <input
                type="text"
                className="form__field"
                placeholder="Nombre"
                name="name"
                id="name"
                required
              />
              <label htmlFor="name" className="form__label">
                Nombre
              </label>
            </div>{" "}
            <div className="form__group field w-1/2">
              <input
                type="email"
                className="form__field"
                placeholder="Correo"
                name="email"
                id="email"
                required
              />
              <label htmlFor="email" className="form__label">
                Correo
              </label>
            </div>
          </div>
          <div className="form__group field w-full">
            <input
              type="text"
              className="form__field"
              placeholder="Mensaje"
              name="message"
              id="message"
              required
            />
            <label htmlFor="message" className="form__label">
              Mensaje
            </label>
          </div>
          <button
            type="submit"
            className=" text-white font-bold py-2 px-4 rounded mt-4"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
