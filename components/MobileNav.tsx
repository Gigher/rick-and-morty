"use client";

import React, { useState } from 'react'

import styles from "../styles/modules/MobileNav.module.scss";
import { navLinks } from '@/constants';
import Link from 'next/link';

const MobileNav = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <button className={`${menuActive ? styles.mobileNav__btn_active : styles.mobileNav__btn}`} onClick={() => setMenuActive(!menuActive)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.linksBar} ${menuActive ? styles.menuActive :  ''}`}>
        <ul className={styles.navList}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.route} className={styles.navListText} onClick={() => setMenuActive(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
    
  )
}

export default MobileNav;