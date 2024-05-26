import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from '../styles/modules/Navbar.module.scss';
import NavLogo from '../public/assets/logo-nav.svg';
import MobileNav from './MobileNav';
import { navLinks } from '@/constants';

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
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.route} className={styles.navListText}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <MobileNav />
        </nav>
      </div>
    </div>
  )
}

export default Navbar