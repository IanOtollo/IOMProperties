import Image from "next/image";
import Link from "next/link";
import styles from "../services.module.css";

export default function AcquisitionPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className="animate-fade-in">Strategic <span>Acquisitions</span></h1>
                    <p className="animate-fade-in">Securing the world's most prestigious off-market opportunities with absolute discretion.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.textBlock}>
                            <h2>The Art of the Acquisition</h2>
                            <p>
                                At IOMProperties, we understand that true luxury often never hits the public market. Our acquisition team specializes in identifying and securing prime real estate through a global network of private owners and elite developers.
                            </p>
                            <p>
                                We don't just find properties; we curate opportunities that align with your financial objectives and lifestyle aspirations.
                            </p>

                            <ul className={styles.featureList}>
                                <li>
                                    <span className={styles.icon}>✦</span>
                                    <div>
                                        <h4>Off-Market Intelligence</h4>
                                        <p>Access to properties unlisted on traditional platforms through our private network.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className={styles.icon}>✦</span>
                                    <div>
                                        <h4>Strategic Negotiation</h4>
                                        <p>Commanding the table with data-driven insights and decades of elite transaction experience.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className={styles.icon}>✦</span>
                                    <div>
                                        <h4>Due Diligence</h4>
                                        <p>Rigorous structural, legal, and financial vetting to ensure your investment is sound.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.imageBlock}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
                                    alt="Luxury Estate Acquisition"
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.ctaSection}>
                        <h3>Ready to acquire your next masterpiece?</h3>
                        <p>Our advisors are standing by for a private consultation.</p>
                        <Link href="/contact?service=acquisition" className={styles.ctaBtn}>
                            Initiate Inquiry
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
