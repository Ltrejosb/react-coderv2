import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const itemsCollections = collection(db, "categories");
    getDocs(itemsCollections).then((res) => {
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
        <ul className={styles.containerList}>
          {categoryList.map((category) => {
            return (
              <Link key={category.id} to={category.path}>
                {category.title}
              </Link>
            );
          })}
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};

export default Navbar;
