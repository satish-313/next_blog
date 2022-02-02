import Navstyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={Navstyles.nav}>
      <div className={Navstyles.navitems}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* <div className={Navstyles.inputSection}>
        <input type="text" />
      </div> */}
    </nav>
  );
};

export default Nav;
