import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className={styles.head}>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Services">Services</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
