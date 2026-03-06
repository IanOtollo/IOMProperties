"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import styles from "../properties.module.css";

export default function AddPropertyPage() {
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        description: "",
        amenities: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Implementation for DB insertion via API
        console.log("Submitting property:", formData);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>List New Property</h1>
                <p>Enter the technical specifications and premium details for the property.</p>
            </header>

            <form onSubmit={handleSubmit} className={`glass-panel ${styles.form}`}>
                <div className={styles.grid}>
                    <div className={styles.formGroup}>
                        <label>Property Title</label>
                        <input
                            type="text"
                            placeholder="e.g. The Vertex Penthouse"
                            className={styles.input}
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Location</label>
                        <input
                            type="text"
                            placeholder="e.g. Dubai Marina, UAE"
                            className={styles.input}
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Price ($)</label>
                        <input
                            type="number"
                            placeholder="8500000"
                            className={styles.input}
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            required
                        />
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label>Bedrooms</label>
                            <input
                                type="number"
                                className={styles.input}
                                value={formData.bedrooms}
                                onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Bathrooms</label>
                            <input
                                type="number"
                                className={styles.input}
                                value={formData.bathrooms}
                                onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Area (sqm)</label>
                            <input
                                type="number"
                                className={styles.input}
                                value={formData.area}
                                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label>Description</label>
                    <textarea
                        rows={5}
                        placeholder="Describe the architectural highlights and unique selling points..."
                        className={styles.textarea}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        required
                    ></textarea>
                </div>

                <div className={styles.formGroup}>
                    <label>Amenities (Comma separated)</label>
                    <input
                        type="text"
                        placeholder="Pool, Helipad, Smart Home..."
                        className={styles.input}
                        value={formData.amenities}
                        onChange={(e) => setFormData({ ...formData, amenities: e.target.value })}
                    />
                </div>

                <div className={styles.actions}>
                    <Button type="button" variant="secondary">Cancel</Button>
                    <Button type="submit" variant="primary">Publish Property</Button>
                </div>
            </form>
        </div>
    );
}
