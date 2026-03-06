import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                <div className={styles.brand}>
                    <h2>
                        IOM<span>Properties</span>
                    </h2>
                    <p>Elevating your living experience with premium, hand-picked real estate globally.</p>
                </div>

                <div className={styles.links}>
                    <h3>Explore</h3>
                    <Link href="/properties">All Properties</Link>
                    <Link href="/about">Our Story</Link>
                    <Link href="/about#ceo">Meet the CEO</Link>
                    <Link href="/dashboard/client/builder">House Imaginator</Link>
                </div>

                <div className={styles.links}>
                    <h3>Services</h3>
                    <Link href="/contact?service=consultation">Private Consultation</Link>
                    <Link href="/contact?service=valuation">Property Valuation</Link>
                    <Link href="/contact?service=management">Estate Management</Link>
                </div>

                <div className={styles.links}>
                    <h3>Legal</h3>
                    <Link href="/terms">Terms of Service</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/contact">Support Centre</Link>
                </div>

                <div className={styles.newsletter}>
                    <h3>Exclusive Updates</h3>
                    <p>Join our private mailing list for the latest premium listings.</p>
                    <form className={styles.form}>
                        <input type="email" placeholder="Your Email Address" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} IOMProperties. All rights reserved.</p>
            </div>
        </footer>
    );
}
