"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${isOpen ? styles.menuOpen : ""}`}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo} onClick={() => isOpen && toggleMenu()}>
            IOM<span>Properties</span>
          </Link>

          <div className={`${styles.links} ${isOpen ? styles.linksOpen : ""}`}>
            <Link href="/properties" onClick={() => isOpen && toggleMenu()}>Properties</Link>
            <Link href="/about" onClick={() => isOpen && toggleMenu()}>About Us</Link>
            <Link href="/contact" onClick={() => isOpen && toggleMenu()}>Contact</Link>
            <Link href="/auth/login" className={styles.loginBtn} onClick={() => isOpen && toggleMenu()}>
              Sign In
            </Link>
          </div>

          <button
            className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && <div className={styles.backdrop} onClick={toggleMenu} />}
    </header>
  );
}
