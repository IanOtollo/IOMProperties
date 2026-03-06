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
            <div className={styles.dropdown} onClick={(e) => {
              if (window.innerWidth <= 768) {
                const content = e.currentTarget.querySelector(`.${styles.dropdownContent}`) as HTMLElement;
                if (content) content.style.display = content.style.display === 'block' ? 'none' : 'block';
              }
            }}>
              <span>Services</span>
              <div className={styles.dropdownContent}>
                <Link href="/contact?service=acquisition" onClick={() => isOpen && toggleMenu()}>Acquisitions</Link>
                <Link href="/contact?service=valuation" onClick={() => isOpen && toggleMenu()}>Valuations</Link>
                <Link href="/contact?service=management" onClick={() => isOpen && toggleMenu()}>Management</Link>
              </div>
            </div>
            <Link href="/about" onClick={() => isOpen && toggleMenu()}>Our Story</Link>
            <Link href="/ceo" onClick={() => isOpen && toggleMenu()}>The CEO</Link>
            <Link href="/dashboard/client/builder" onClick={() => isOpen && toggleMenu()}>Imaginator</Link>
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
