"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "./contact.module.css";
import { Suspense } from "react";

function ContactForm() {
    const searchParams = useSearchParams();
    const service = searchParams.get("service") || "";

    return (
        <form className={styles.form}>
            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label>Full Name</label>
                    <input type="text" placeholder="e.g. John Doe" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input type="email" placeholder="e.g. john@luxury.com" required />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label>Service Required</label>
                <select key={service} defaultValue={service}>
                    <option value="" disabled>Select a service</option>
                    <option value="acquisition">Property Acquisition</option>
                    <option value="valuation">Portfolio Valuation</option>
                    <option value="management">Estate Management</option>
                    <option value="listing">List Your Property</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label>Message</label>
                <textarea rows={5} placeholder="Describe your requirements in detail..."></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>Submit Request</button>
        </form>
    );
}

export default function ContactPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className="animate-fade-in">Connect with <span>Excellence</span></h1>
                    <p className="animate-fade-in">Our advisors are ready to curate your next real estate masterpiece.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.info}>
                            <div className={styles.infoItem}>
                                <h3>Global Headquarters</h3>
                                <p>Mombasa Road, Nextgen Mall, Nairobi, Kenya</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h3>Direct Inquiries</h3>
                                <p>+254 700 399 641</p>
                                <p>concierge@iomproperties.com</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h3>Operating Hours</h3>
                                <p>Mon - Fri: 08:00 - 18:00</p>
                                <p>Sat: 09:00 - 13:00</p>
                            </div>

                            <div className={styles.organizationalAura}>
                                <h4>The IOM Promise</h4>
                                <p>
                                    "Your privacy and investment integrity are our highest priorities. Every inquiry is personally reviewed by our senior consulting team."
                                </p>
                                <Link href="/about#ceo" className={styles.ceoLink}>Letter from the CEO &rarr;</Link>
                            </div>
                        </div>

                        <div className={styles.formContainer}>
                            <h2 className={styles.formTitle}>Private Consultation Request</h2>
                            <Suspense fallback={<div>Loading form...</div>}>
                                <ContactForm />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
