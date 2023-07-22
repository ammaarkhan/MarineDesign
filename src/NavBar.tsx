// src/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.navTitle}>Marine Design</h1>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link to="/">Home</Link></li>
        <li className={styles.navItem}>
          Competitions
          <ul className={styles.dropdown}>
            <li className={styles.dropdownItem}><Link to="/electric-propulsion">Electric Propulsion</Link></li>
            <li className={styles.dropdownItem}><Link to="/auv">AUV</Link></li>
          </ul>
        </li>
        <li className={styles.navItem}><Link to="/the-team">The Team</Link></li>
        <li className={styles.navItem}><Link to="/sponsor">Sponsor</Link></li>
        <li className={styles.navItem}><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
