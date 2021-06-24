import Image from "next/image";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const menuItem = [
    {
      id: 1,
      src: "/static/icon/currency.svg",
      title: "Currency",
    },
    {
      id: 2,
      src: "/static/icon/language.svg",
      title: "Language",
    },
  ];
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          <Image
            src="/static/img/logo.png"
            alt="logo trooz"
            width={95}
            height={60}
          />
        </div>
        <div className={styles.navbar__menu}>
          <ul className={styles.navbar__item}>
            {menuItem.map((item) => {
              return (
                <li className={styles.navbar__itemStyles}>
                  <Image
                    src={item.src}
                    alt={`${item.title} icon`}
                    width={18}
                    height={20}
                  />
                  <a href="" className={styles.navbar__itemTitle}>
                    {item.title}
                  </a>
                </li>
              );
            })}
            <li>
              <button className={styles.button__container}>
                <Image
                  src="/static/img/pp.jpg"
                  alt=""
                  className={styles.profile__picture}
                  width={200}
                  height={200}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
