import react, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/index.module.scss";
import Link from "next/link";

const RecargarWallet = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [pay, setPay] = useState("");
  const [selectedBank, setSelectedBank] = useState("");

  const payOptions = [
    { label: "PSG", value: "PGS" },
    { label: "Effecty", value: "Effecty" },
    { label: "Gana", value: "Gane" },
  ];

  const bankOptions = [
    { label: "Banco de Bogotá", value: "banco-de-bogota" },
    { label: "Banco Davivienda", value: "banco-davivienda" },
    { label: "Bancolombia", value: "bancolombia" },
    { label: "Banco Popular", value: "banco-popular" },
    { label: "Banco Caja Social", value: "banco-caja-social" },
    { label: "BBVA Colombia", value: "bbva-colombia" },
    { label: "Banco de Occidente", value: "banco-de-occidente" },
    { label: "Banco AV Villas", value: "banco-av-villas" },
    { label: "Banco CorpBanca", value: "banco-corpbanca" },
    { label: "Banco Agrario de Colombia", value: "banco-agrario-de-colombia" },
    // Agrega más bancos según tus necesidades
  ];

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

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
    <AnimatePresence>
      <div className={styles.container}>
        <motion.main
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <h1>RECARGAR WALLET</h1>
          <section className={styles.fristContainer}>
            <section className={styles.inputContainer}>
              <label className={styles.fristLabel}>Pay:</label>
              <select
                name="Pay"
                value={formData.lastName}
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
                className={styles.fristInput}
              >
                <option value={""}>selecciones medio de pago</option>
                {payOptions.map((pay) => {
                  <option hey={pay.value} value={pay.value}>
                    {pay.label}
                  </option>;
                })}
              </select>
            </section>

            <section className={styles.inputContainer}>
              <label className={styles.fristLabel}>Banco:</label>
              <select
                name="banco"
                value={formData.firstName}
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
                className={styles.fristInput}
              >
                <option value="">Seleccione un banco</option>
                {bankOptions.map((bank) => (
                  <option key={bank.value} value={bank.value}>
                    {bank.label}
                  </option>
                ))}
              </select>
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

            <input
              className={styles.submit}
              type="submit"
              onChange={handleChange}
            />
          </section>
          <button>
            <Link href={"/Wallet"}>Volver a faster</Link>
          </button>
        </motion.main>
      </div>
    </AnimatePresence>
  );
};

export default RecargarWallet;
