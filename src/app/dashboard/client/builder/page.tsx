"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import styles from "./builder.module.css";

export default function HouseImaginator() {
    const [step, setStep] = useState(1);
    const [preferences, setPreferences] = useState({
        style: "Modern",
        location: "Coastal",
        budget: "Luxury",
    });

    const nextStep = () => setStep(step + 1);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Dream House <span>Imaginator</span></h1>
                <p>Architect your vision. We handle the reality.</p>
            </header>

            <div className={`glass-panel ${styles.builderCard}`}>
                {step === 1 && (
                    <div className={styles.step}>
                        <h3>Choose Your Architectural Style</h3>
                        <div className={styles.options}>
                            {["Modern", "Classical", "Minimalist", "Futuristic"].map(style => (
                                <button
                                    key={style}
                                    className={preferences.style === style ? styles.selected : ""}
                                    onClick={() => setPreferences({ ...preferences, style })}
                                >
                                    {style}
                                </button>
                            ))}
                        </div>
                        <Button onClick={nextStep} variant="primary">Next Step</Button>
                    </div>
                )}

                {step === 2 && (
                    <div className={styles.step}>
                        <h3>Ideal Landscape</h3>
                        <div className={styles.options}>
                            {["Coastal", "Mountain", "Urban", "Countryside"].map(loc => (
                                <button
                                    key={loc}
                                    className={preferences.location === loc ? styles.selected : ""}
                                    onClick={() => setPreferences({ ...preferences, location: loc })}
                                >
                                    {loc}
                                </button>
                            ))}
                        </div>
                        <Button onClick={nextStep} variant="primary">Generate Concept</Button>
                    </div>
                )}

                {step === 3 && (
                    <div className={styles.step}>
                        <h3>Your Vision is Taking Shape</h3>
                        <div className={styles.result}>
                            <p>A <strong>{preferences.style}</strong> masterpiece set in a <strong>{preferences.location}</strong> paradise.</p>
                            <div className={styles.placeholderImage}>
                                <div className={styles.scanner}></div>
                                <span>Generating High-Fidelity Rendering...</span>
                            </div>
                        </div>
                        <Button onClick={() => setStep(1)} variant="outline">Start Over</Button>
                        <Button variant="primary">Request Consultation</Button>
                    </div>
                )}
            </div>
        </div>
    );
}
