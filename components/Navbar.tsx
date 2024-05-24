import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from '../styles/modules/Navbar.module.scss';
import NavLogo from '../public/assets/logo-nav.svg';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <div className={styles.shadow}>
      <div className={styles.navWrapper}>
        <nav className={styles.nav}>
          <Link href="/">
            <Image
              src={NavLogo}
              alt="logo"
              width={46}
              height={49}
            />
          </Link>

          <ul className={styles.navList}>
            <li className={styles.navItems}>
              <Link href='/characters' className={styles.navListText}>
                Characters
              </Link>
            </li>
            <li className={styles.navItems}>
              <Link href='/locations' className={styles.navListText}>
                Locations
              </Link>
            </li>
            <li className={styles.navItems}>
              <Link href='/episodes' className={styles.navListText}>
                Episodes
              </Link>
            </li>
          </ul>

          <MobileNav />
        </nav>
      </div>
    </div>
  )
}

export default Navbar