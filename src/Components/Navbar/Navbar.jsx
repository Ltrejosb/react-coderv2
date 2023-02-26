import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import NavbarList from "../NavbarList/NavbarList";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <Logo />
      <NavbarList />
      <CartWidget />
    </div>
  );
};

export default Navbar;
