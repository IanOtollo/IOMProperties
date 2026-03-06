import Image from 'next/image';
import Link from 'next/link';
import styles from './PropertyCard.module.css';

interface PropertyCardProps {
    id: string;
    title: string;
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    imageUrl: string;
}

export default function PropertyCard({
    id,
    title,
    price,
    location,
    bedrooms,
    bathrooms,
    area,
    imageUrl,
}: PropertyCardProps) {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(price);

    return (
        <Link href={`/properties/${id}`} className={styles.card}>
            <div className={styles.imageContainer}>
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className={styles.placeholder}>No Image</div>
                )}
                <div className={styles.priceTag}>{formattedPrice}</div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.location}>{location}</p>

                <div className={styles.specs}>
                    <div className={styles.specItem}>
                        <span className={styles.specValue}>{bedrooms}</span>
                        <span className={styles.specLabel}>Beds</span>
                    </div>
                    <div className={styles.specItem}>
                        <span className={styles.specValue}>{bathrooms}</span>
                        <span className={styles.specLabel}>Baths</span>
                    </div>
                    <div className={styles.specItem}>
                        <span className={styles.specValue}>{area}</span>
                        <span className={styles.specLabel}>sqm</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
