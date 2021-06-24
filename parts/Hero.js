import styles from "../styles/Hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={styles.hero__container}>
      <a href="">
        <div className={styles.hero__banner}>
          <Image
            src="/static/img/hero.png"
            alt="Hero Image"
            width={1160}
            height={300}
            className={styles.hero__image}
          />
          <p className={styles.hero__title}>Manama, Bahrain</p>
        </div>
      </a>
    </section>
  );
}

export default Hero;
