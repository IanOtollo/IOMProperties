import Link from "next/link";
import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className="animate-fade-in">Our <span>Story</span></h1>
                    <p className="animate-fade-in">Architecting the standard of luxury living since inception.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.textBlock}>
                            <h2>The IOM Standard</h2>
                            <p>
                                At IOMProperties, we don't just sell buildings; we curate lifestyles.
                                Our journey began with a single vision: to bridge the gap between
                                functional architecture and aesthetic excellence. Founded on the
                                principles of integrity, precision, and unparalleled service, we
                                have become the definitive choice for the elite clientele.
                            </p>
                            <p>
                                Every property in our portfolio undergoes a rigorous vetting process.
                                From the structural integrity to the micro-details of the interior
                                finishing, we ensure that every square inch resonates with the
                                "IOM Standard".
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                                    alt="Modern Architecture"
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.values}>
                <div className="container">
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <h3>Integrity</h3>
                            <p>Transparency in every contract, honesty in every interaction.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Innovation</h3>
                            <p>Utilizing state-of-the-art tech like our Dream House Imaginator.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Excellence</h3>
                            <p>Never settling for "good enough" when perfection is possible.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
