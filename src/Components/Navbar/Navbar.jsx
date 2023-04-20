import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "categories");
    getDocs(itemsCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategoryList(arrayCategories);
    });
  }, []);

  return (
    <div className={styles.containerNavbar}>
      <Logo />
      <div>
        <ul className={`${styles.containerList} ${styles.ul}`}>
          {categoryList.map((category) => {
            return (
              <li key={category.id}>
                <Link to={category.path}>{category.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <CartWidget />
      {children}
    </div>
  );
};

export default Navbar;
