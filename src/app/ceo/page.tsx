import Image from "next/image";
import Link from "next/link";
import styles from "./ceo.module.css";
import Button from "@/components/ui/Button";

export default function CEOPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroGrid}>
                        <div className={styles.imageSection}>
                            <div className={styles.imageFrame}>
                                <Image
                                    src="/images/ceo-cool.png"
                                    alt="Ian Otollo Marabi - CEO"
                                    fill
                                    className={styles.ceoImage}
                                    priority
                                />
                            </div>
                        </div>
                        <div className={styles.textSection}>
                            <span className={styles.label}>Founding Vision</span>
                            <h1>Ian Otollo <span>Marabi</span></h1>
                            <p className={styles.title}>Founder & Chief Executive Officer</p>

                            <div className={styles.auraDivider}></div>

                            <blockquote className={styles.quote}>
                                "Architecture is the silent witness to our existence. At IOMProperties, we ensure that witness is one of absolute luxury and uncompromising integrity."
                            </blockquote>

                            <div className={styles.bio}>
                                <p>
                                    With over a decade of experience in global real estate, Ian Otollo Marabi
                                    founded IOMProperties to redefine the high-end property market. His vision
                                    centers on the "IOM Standard"—a commitment to excellence that goes beyond
                                    the physical structure.
                                </p>
                                <p>
                                    Under his leadership, IOMProperties has grown into a definitive choice for
                                    elite clientele, bridging the gap between functional architecture and
                                    aesthetic excellence.
                                </p>
                            </div>

                            <div className={styles.signatureSection}>
                                <div className={styles.signature}>Ian Otollo Marabi</div>
                                <p>Chief Executive Officer</p>
                            </div>

                            <div className={styles.actions}>
                                <Link href="/contact">
                                    <Button variant="primary">Schedule a Private Consultation</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
