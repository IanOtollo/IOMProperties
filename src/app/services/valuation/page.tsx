import Image from "next/image";
import Link from "next/link";
import styles from "../services.module.css";

export default function ValuationPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className="animate-fade-in">Precision <span>Valuation</span></h1>
                    <p className="animate-fade-in">Defining the true value of exceptional assets through rigorous analysis and market mastery.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.imageBlock}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="https://images.unsplash.com/photo-1460317442991-0ec239f636a7?auto=format&fit=crop&q=80&w=1200"
                                    alt="Real Estate Analysis"
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                        <div className={styles.textBlock}>
                            <h2>Market Mastery</h2>
                            <p>
                                A luxury asset is more than the sum of its parts. Our valuation methodology goes beyond simple square footage, accounting for architectural pedigree, historical significance, and micro-market trends.
                            </p>
                            <p>
                                Whether you are looking to divest, refinance, or simply understand your portfolio's position, we provide the most accurate assessment in the industry.
                            </p>

                            <ul className={styles.featureList}>
                                <li>
                                    <span className={styles.icon}>✦</span>
                                    <div>
                                        <h4>Comparative Analysis</h4>
                                        <p>Real-time data from the world's most exclusive transactions to benchmark your asset.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className={styles.icon}>✦</span>
                                    <div>
                                        <h4>Pedigree Assessment</h4>
                                        <p>Factoring in the intangible value of architects, designers, and historical context.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className={styles.icon}>✦</span>
                                    <div>
                                        <h4>Future Casting</h4>
                                        <p>Predictive modeling to understand the long-term appreciation potential of your estate.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.ctaSection}>
                        <h3>Know the true value of your portfolio.</h3>
                        <p>Receive a comprehensive audit from our senior analysts.</p>
                        <Link href="/contact?service=valuation" className={styles.ctaBtn}>
                            Request Valuation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
