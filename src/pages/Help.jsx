import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/index.module.scss";

const Help = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [radicado, setRadicado] = useState("");

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

    if (name.trim() === "" || phone.trim() === "" || message.trim() === "") {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }

    // Generar número de radicado al azar
    const randomRadicado = Math.floor(Math.random() * 100000);
    setRadicado(randomRadicado);

    // Simulación de envío del formulario (puedes reemplazar esto con tu lógica de envío real)
    setTimeout(() => {
      setIsFormSubmitted(true);
    }, 1000);
  };

  return (
    <AnimatePresence>
      <motion.section
        className={styles.help}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        {isFormSubmitted ? (
          <section>
            <h2>¡Mensaje enviado con éxito!</h2>
            <p>Número de radicado: {radicado}</p>
          </section>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
            <br />
            <div>
              <label>Teléfono:</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
            <br />
            <div>
              <label>Mensaje</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={500}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
            <br />
            <button type="submit">Enviar</button>
          </form>
        )}
      </motion.section>
    </AnimatePresence>
  );
};

export default Help;
