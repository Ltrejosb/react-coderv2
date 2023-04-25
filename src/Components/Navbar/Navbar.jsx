import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import MuiLink from "@mui/material/Link";

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
                <MuiLink
                  component={Link}
                  to={category.path}
                  underline="none"
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  {category.title}
                </MuiLink>
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
