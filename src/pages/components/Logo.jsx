import Image from "next/image";
import styles from "../../styles/index.module.scss";

const Logo = () => {
  return (
    <>
      <picture className={styles.imgContainer}>
        <Image
          src="/faster.png"
          priority={false}
          alt="img"
          width={350}
          height={100}
        />
      </picture>
    </>
  );
};

export default Logo;
