import Link from "next/link";
import styles from "../../styles/index.module.scss";

const Manu = () => {
  return (
    <>
      <nav className={styles.Menu}>
        <ul>
          <li>
            <Link href={"/"} className={styles.link}>
              Registro
            </Link>
          </li>
          <li>
            <Link href={"/Trip"} className={styles.link}>
              Trips
            </Link>
          </li>
          <li>
            <Link href={"/Wallet"} className={styles.link}>
              Wallet
            </Link>
          </li>
          <li>
            <Link href={"/"} className={styles.link}>
              Help
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Manu;
