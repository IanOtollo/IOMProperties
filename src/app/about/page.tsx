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

            <section className={styles.ceoSection} id="ceo">
                <div className="container">
                    <div className={styles.ceoGrid}>
                        <div className={styles.ceoImageContainer}>
                            <div className={styles.ceoImageWrapper}>
                                <Image
                                    src="/images/ceo.png"
                                    alt="Ian Otollo Marabi - CEO"
                                    fill
                                    className={styles.ceoImage}
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    priority
                                />
                            </div>
                        </div>
                        <div className={styles.ceoText}>
                            <h2 className={styles.ceoTitle}>Meet Our CEO</h2>
                            <h3 className={styles.ceoName}>Ian Otollo Marabi</h3>
                            <div className={styles.auraDivider}></div>
                            <blockquote className={styles.quote}>
                                "Architecture is the silent witness to our existence. At IOMProperties, we ensure that witness is one of absolute luxury and uncompromising integrity."
                            </blockquote>
                            <p>
                                With over a decade of experience in global real estate, Ian Otollo Marabi
                                founded IOMProperties to redefine the high-end property market. His vision
                                centers on the "IOM Standard"—a commitment to excellence that goes beyond
                                the physical structure.
                            </p>
                            <div className={styles.signatureContainer}>
                                <div className={styles.signature}>Ian Otollo Marabi</div>
                                <p className={styles.signatureSub}>Founder & Chief Executive Officer</p>
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
