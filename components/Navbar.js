import React from "react";
import navStyles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={navStyles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
