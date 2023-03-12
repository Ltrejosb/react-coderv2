import React from "react";
import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const NavbarList = () => {
  return (
    <div>
      <ul className={styles.containerList}>
        <Link to="/">
          <a href="#">TODAS LAS CATEGORIAS</a>
        </Link>
        <Link to="/category/Indumentaria">
          <a href="#">INDUMENTARIA</a>
        </Link>
        <Link to="/category/Componentes">
          <a href="#">COMPONENTES</a>
        </Link>
        <Link to="/category/Protecciones">
          <a href="#">PROTECCIONES</a>
        </Link>
      </ul>
    </div>
  );
};

export default NavbarList;
