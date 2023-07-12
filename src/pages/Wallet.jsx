import Link from "next/link";
import styles from "../styles/index.module.scss";

const Wallet = () => {
  const viajes = [
    { id: 1, nombre: "Trip 1", precio: 8600 },
    { id: 2, nombre: "Trip 2", precio: 11500 },
    { id: 3, nombre: "Trip 3", precio: 14000 },
    { id: 4, nombre: "Trip 4", precio: 6800 },
    { id: 5, nombre: "Trip 5", precio: 7200 },
    { id: 6, nombre: "Trip 6", precio: 4800 },
    { id: 7, nombre: "Trip 7", precio: 9000 },
    { id: 1, nombre: "Trip 1", precio: 8600 },
    { id: 2, nombre: "Trip 2", precio: 11500 },
    { id: 3, nombre: "Trip 3", precio: 14000 },
    { id: 4, nombre: "Trip 4", precio: 6800 },
    { id: 5, nombre: "Trip 5", precio: 7200 },
    { id: 6, nombre: "Trip 6", precio: 4800 },
    { id: 7, nombre: "Trip 7", precio: 9000 },
  ];

  const calcularCobro = (precio) => {
    const cobro = precio * 0.07;
    return cobro.toFixed(); // Limitar a 2 decimales
  };

  return (
    <>
      <main className={styles.walletContainer}>
        <section className={styles.wallet}>
          <h1>Wallet: 12,000</h1>
        </section>

        <section className={styles.recargarWallet}>
          <Link href={"#"}>
            <h2>Recargar wallet</h2>
          </Link>
        </section>

        <section className={styles.trips}>
          {viajes.map((viaje) => (
            <section key={viaje.id}>
              <h2>{viaje.nombre}</h2>
              <p>Precio: {viaje.precio}</p>
              <p>
                Comicion al conductor del 7% : {calcularCobro(viaje.precio)}
              </p>
            </section>
          ))}
        </section>
      </main>
    </>
  );
};

export default Wallet;
