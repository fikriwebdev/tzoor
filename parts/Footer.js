import React from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  const footerItem = [
    {
      id: 1,
      title: "ABOUT US",
      item: [
        {
          title: "Our Story",
          href: "",
        },
        {
          title: "Service",
          href: "",
        },
        {
          title: "Why Us",
          href: "",
        },
        {
          title: "Contract",
          href: "",
        },
      ],
    },
    {
      id: 2,
      title: "LOCATION",
      item: [
        {
          title: "Bahrain",
          href: "",
        },
        {
          title: "United Kingdom",
          href: "",
        },
        {
          title: "Netherlands",
          href: "",
        },
        {
          title: "United State",
          href: "",
        },
      ],
    },
    {
      id: 3,
      title: "Another",
      item: [
        {
          title: "Menu 1",
          href: "",
        },
        {
          title: "Menu 2",
          href: "",
        },
        {
          title: "Menu 3",
          href: "",
        },
        {
          title: "Menu 4",
          href: "",
        },
      ],
    },
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div style={{ color: "white" }}>
          <h2 style={{ fontSize: 36, fontWeight: 600, lineHeight: 0 }}>
            tzOOR
          </h2>
          <p style={{ fontSize: 14, fontFamily: "Roboto" }}>
            &copy; Copyright 2021
          </p>
        </div>
        <div className={styles.footer__menuContainer}>
          <ul>
            <li className={styles.footer__menu}>
              {footerItem.map((item) => {
                return (
                  <ul>
                    <li style={{ fontWeight: 700, fontSize: 16 }}>
                      <p>{item.title}</p>
                    </li>
                    {item.item.map((item) => {
                      return (
                        <li
                          style={{
                            fontSize: 14,
                            fontWeight: 400,
                            fontFamily: "Roboto",
                            color: "#C0C6CB",
                          }}
                        >
                          <a href={item.href}>{item.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
