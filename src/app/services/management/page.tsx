import Image from "next/image";
import Link from "next/link";
import styles from "../services.module.css";

export default function ManagementPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className="animate-fade-in">Estate <span>Management</span></h1>
                    <p className="animate-fade-in">Seamless preservation and optimization of your global property portfolio.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.textBlock}>
                            <h2>Effortless Ownership</h2>
                            <p>
                                Owning a masterpiece should never be a burden. IOMProperties provides a comprehensive suite of management services designed to maintain the integrity of your property while maximizing its potential.
                            </p>
                            <p>
                                From staff management to technical maintenance, we handle every detail with the same level of excellence you expect from the IOM brand.
                            </p>

                            <ul className={styles.featureList}>
                                <li>
                                    <span className={styles.icon}>✦</span>
                                    <div>
                                        <h4>Concierge Maintenance</h4>
                                        <p>Pre-emptive technical support and groundskeeping managed by industry professionals.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className={styles.icon}>✦</span>
                                    <div>
                                        <h4>Asset Optimization</h4>
                                        <p>Strategic management to ensure your property remains a high-performing asset.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className={styles.icon}>✦</span>
                                    <div>
                                        <h4>Global Supervision</h4>
                                        <p>Unified management for clients with properties across multiple continents.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.imageBlock}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
                                    alt="Luxury Estate Management"
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.ctaSection}>
                        <h3>Experience the luxury of freedom.</h3>
                        <p>Delegate the management of your estate to the experts.</p>
                        <Link href="/contact?service=management" className={styles.ctaBtn}>
                            Secure Services
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
