import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export default function PropertyDetail({ params }: { params: { id: string } }) {
    // In a real app, use the ID to fetch from Prisma DB
    const property = {
        id: params.id,
        title: 'The Vertex Penthouse',
        price: 8500000,
        location: 'Dubai Marina, UAE',
        bedrooms: 5,
        bathrooms: 6,
        area: 850,
        description: 'An architectural masterpiece suspended above the clouds. The Vertex Penthouse offers panoramic 360-degree views of the Dubai skyline and the Arabian Gulf. Featuring bespoke Italian marble floors, a private infinity edge pool, state-of-the-art smart home automation, and dedicated concierge service 24/7.',
        images: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200'
        ],
        amenities: [
            'Private Infinity Pool',
            'Helipad Access',
            'Bespoke Italian Kitchen',
            'Smart Home Automation',
            'Cinema Room',
            'Valet Parking'
        ]
    };

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(property.price);

    return (
        <div className={styles.container}>
            {/* Hero Image Gallery */}
            <section className={styles.gallery}>
                <div className={styles.mainImageWrapper}>
                    <Image
                        src={property.images[0]}
                        alt={property.title}
                        fill
                        priority
                        className={styles.mainImage}
                    />
                </div>
                <div className={styles.thumbnailGrid}>
                    {property.images.slice(1).map((img, idx) => (
                        <div key={idx} className={styles.thumbnailWrapper}>
                            <Image src={img} alt={`Thumbnail ${idx}`} fill className={styles.thumbnail} />
                        </div>
                    ))}
                    <div className={`${styles.thumbnailWrapper} ${styles.morePhotos}`}>
                        <span>View All Photos</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className={`container ${styles.contentLayout}`}>
                <div className={styles.mainInfo}>
                    <div className={styles.header}>
                        <p className={styles.location}>{property.location}</p>
                        <h1 className={styles.title}>{property.title}</h1>
                        <p className={styles.price}>{formattedPrice}</p>
                    </div>

                    <div className={styles.specs}>
                        <div className={styles.specBox}>
                            <span className={styles.specLabel}>Bedrooms</span>
                            <span className={styles.specValue}>{property.bedrooms}</span>
                        </div>
                        <div className={styles.specBox}>
                            <span className={styles.specLabel}>Bathrooms</span>
                            <span className={styles.specValue}>{property.bathrooms}</span>
                        </div>
                        <div className={styles.specBox}>
                            <span className={styles.specLabel}>Square Meters</span>
                            <span className={styles.specValue}>{property.area}</span>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>About this Property</h2>
                        <p className={styles.description}>{property.description}</p>
                    </div>

                    <div className={styles.section}>
                        <h2>Premium Amenities</h2>
                        <ul className={styles.amenityList}>
                            {property.amenities.map(amenity => (
                                <li key={amenity}>
                                    <span className={styles.amenityIcon}>✧</span>
                                    {amenity}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sidebar Action Card */}
                <aside className={styles.sidebar}>
                    <div className={`glass-panel ${styles.contactCard}`}>
                        <h3>Interested in this property?</h3>
                        <p>Our exclusive agents are ready to arrange a private viewing or answer any questions.</p>

                        <form className={styles.contactForm}>
                            <input type="text" placeholder="Your Name" className={styles.input} required />
                            <input type="email" placeholder="Your Email" className={styles.input} required />
                            <input type="tel" placeholder="Phone Number" className={styles.input} />
                            <textarea placeholder="I would like to arrange a viewing..." rows={4} className={styles.textarea} required></textarea>
                            <Button type="button" variant="primary" fullWidth>Request Details</Button>
                        </form>

                        <p className={styles.disclaimer}>
                            By submitting this form, you agree to our Terms of Service and Privacy Policy. IOMProperties guarantees strict confidentiality.
                        </p>
                    </div>
                </aside>
            </section>
        </div>
    );
}
