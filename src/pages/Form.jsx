import React, { useState, useEffect } from "react";
import styles from "../styles/index.module.scss";
import Logo from "./components/Logo";

const Form = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    frontImage: "",
    backImage: "",
    soatImage: "",
  });
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputFocus = (e) => {
    const label = e.target.parentNode.querySelector("label");
    label.classList.add(styles.labelUp);
  };

  const handleInputBlur = (e) => {
    const input = e.target;
    const label = input.parentNode.querySelector("label");
    if (input.value === "") {
      label.classList.remove(styles.labelUp);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que todos los campos estén llenos
    const isFormValid = Object.values(formData).every((value) => value !== "");
    if (!isFormValid) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Guardar los datos en localStorage
    localStorage.setItem("registrationData", JSON.stringify(formData));
    // Mostrar el componente de registro exitoso
    setSuccess(true);

    // Reiniciar los campos del formulario
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      frontImage: "",
      backImage: "",
      soatImage: "",
    });
  };

  return (
    <>
      {isLoading ? (
        <Logo />
      ) : success ? (
        <section>
          <h2>¡Registro exitoso!</h2>
          <p>Tus datos han sido registrados correctamente.</p>
        </section>
      ) : (
        <form onSubmit={handleSubmit} className={styles.Form}>
          <h1>Registro</h1>

          <section className={styles.fristContainer}>
            <section className={styles.inputContainer}>
              <label className={styles.fristLabel}>Nombre:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
                className={styles.fristInput}
              />
            </section>

            <section className={styles.inputContainer}>
              <label className={styles.fristLabel}>Apellidos:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
                className={styles.fristInput}
              />
            </section>

            <section className={styles.inputContainer}>
              <label className={styles.fristLabel}>Teléfono:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
                className={styles.fristInput}
              />
            </section>

            <section className={styles.inputContainer}>
              <label className={styles.fristLabel}>Correo:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
                className={styles.fristInput}
              />
            </section>
          </section>

          <section className={styles.secondContainer}>
            <section className={styles.inputContainer}>
              <input
                type="file"
                name="frontImage"
                onChange={handleChange}
                required
              />
              <label>Licencia: Parte Delantera:</label>
            </section>

            <section className={styles.inputContainer}>
              <input
                type="file"
                name="backImage"
                onChange={handleChange}
                required
              />
              <label>Licencia: Parte Trasera:</label>
            </section>

            <section className={styles.inputContainer}>
              <input
                type="file"
                name="backImage"
                onChange={handleChange}
                required
              />
              <label>Matricula: Parte Delantera:</label>
            </section>

            <section className={styles.inputContainer}>
              <input
                type="file"
                name="backImage"
                onChange={handleChange}
                required
              />
              <label>Matricula: Parte Trasera:</label>
            </section>

            <section className={styles.inputContainer}>
              <input
                type="file"
                name="soatImage"
                onChange={handleChange}
                required
              />
              <label>SOAT:</label>
            </section>
          </section>
          <br />
          <button type="submit">Enviar</button>
        </form>
      )}
    </>
  );
};

export default Form;
