import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name.length < 5) {
      setError(true);
      setErrorMessage("nombre no valido");
      return;
    }

    const incluye = userData.email.includes("@");

    if (!incluye) {
      setError(true);
      setErrorMessage("correo invalido");
      return;
    }

    const str = userData.password.trim();
    const passwordIsValid = userData.password === str;

    if (!passwordIsValid || userData.password.length < 5) {
      setError(true);
      setErrorMessage("la contraseña no puede llevar espacios");
      return;
    }

    console.log(userData);
  };

  return (
    <div>
      <h1>FORMULARIO</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingrese su nombre"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="ingrese su email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          placeholder="ingrese su contraseña"
          onChange={handleChange}
          name="password"
        />
        <button type="onsubmit">Enviar</button>
      </form>

      {error ? <h1>{errorMessage}</h1> : null}
    </div>
  );
};

export default Form;
