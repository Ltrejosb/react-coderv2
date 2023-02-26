import React from "react";
import styles from "../Navbar/Navbar.module.css";

const NavbarList = () => {
  return (
    <div>
      <ul className={styles.containerList}>
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="#">PRODUCTOS</a>
        </li>
        <li>
          <a href="#">SERVICIOS</a>
        </li>
        <li>
          <a href="#">BLOG</a>
        </li>
        <li>
          <a href="#">CONTACTO</a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarList;
