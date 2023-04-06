import React from "react";
import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const NavbarList = () => {
  return (
    <div>
      <ul className={styles.containerList}>
        <Link to="/">TODAS LAS CATEGORIAS</Link>
        <Link to="/category/Indumentaria">INDUMENTARIA</Link>
        <Link to="/category/Componentes">COMPONENTES</Link>
        <Link to="/category/Protecciones">PROTECCIONES</Link>
      </ul>
    </div>
  );
};

export default NavbarList;
