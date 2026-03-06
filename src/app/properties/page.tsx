import PropertyCard from '@/components/ui/PropertyCard';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export default function PropertiesPage() {
    // Placeholder mock data for all properties
    const allProperties = [
        {
            id: 'prop-1',
            title: 'The Vertex Penthouse',
            price: 8500000,
            location: 'Dubai Marina, UAE',
            bedrooms: 5,
            bathrooms: 6,
            area: 850,
            imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200'
        },
        {
            id: 'prop-2',
            title: 'Monaco Cliff Villa',
            price: 12400000,
            location: 'Monaco-Ville, Monaco',
            bedrooms: 7,
            bathrooms: 8,
            area: 1200,
            imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
        },
        {
            id: 'prop-3',
            title: 'Alpine Glass Retreat',
            price: 5900000,
            location: 'Zermatt, Switzerland',
            bedrooms: 4,
            bathrooms: 4,
            area: 450,
            imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200'
        },
        {
            id: 'prop-4',
            title: 'Malibu Oceanfront Estate',
            price: 18500000,
            location: 'Malibu, CA, USA',
            bedrooms: 6,
            bathrooms: 7,
            area: 950,
            imageUrl: 'https://images.unsplash.com/photo-1613490908592-5d9c240974ed?auto=format&fit=crop&q=80&w=1200'
        },
        {
            id: 'prop-5',
            title: 'Mayfair Townhouse',
            price: 9200000,
            location: 'London, UK',
            bedrooms: 5,
            bathrooms: 5,
            area: 600,
            imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
        },
        {
            id: 'prop-6',
            title: 'Tokyo Sky Residence',
            price: 7800000,
            location: 'Minato, Tokyo, Japan',
            bedrooms: 3,
            bathrooms: 4,
            area: 320,
            imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200'
        }
    ];

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>The IOM Collection</h1>
                    <p className={styles.subtitle}>Explore our exclusive portfolio of global luxury real estate.</p>
                </div>
            </div>

            <div className={`container ${styles.layout}`}>
                {/* Filters Sidebar */}
                <aside className={styles.sidebar}>
                    <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
                        <h3 className={styles.filterTitle}>Refine Search</h3>

                        <form className={styles.filterForm}>
                            <div className={styles.formGroup}>
                                <label>Location</label>
                                <input type="text" placeholder="Dubai, London, Monaco..." className={styles.input} />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Property Type</label>
                                <select className={styles.select}>
                                    <option value="all">Any Type</option>
                                    <option value="villa">Villa</option>
                                    <option value="penthouse">Penthouse</option>
                                    <option value="estate">Estate</option>
                                    <option value="townhouse">Townhouse</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Price Range</label>
                                <select className={styles.select}>
                                    <option value="any">Any Price</option>
                                    <option value="1m-5m">$1M - $5M</option>
                                    <option value="5m-10m">$5M - $10M</option>
                                    <option value="10m+">Over $10M</option>
                                </select>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Beds</label>
                                    <select className={styles.select}>
                                        <option value="any">Any</option>
                                        <option value="3+">3+</option>
                                        <option value="4+">4+</option>
                                        <option value="5+">5+</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Baths</label>
                                    <select className={styles.select}>
                                        <option value="any">Any</option>
                                        <option value="3+">3+</option>
                                        <option value="4+">4+</option>
                                        <option value="5+">5+</option>
                                    </select>
                                </div>
                            </div>

                            <Button type="button" variant="primary" fullWidth className={styles.filterBtn}>
                                Apply Filters
                            </Button>
                        </form>
                    </div>
                </aside>

                {/* Results */}
                <main className={styles.resultsMain}>
                    <div className={styles.resultsHeader}>
                        <span className={styles.resultsCount}>{allProperties.length} Premium Listings</span>
                        <div className={styles.sort}>
                            <select className={styles.select}>
                                <option value="featured">Sort by Featured</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="newest">Newest First</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        {allProperties.map(prop => (
                            <PropertyCard key={prop.id} {...prop} />
                        ))}
                    </div>

                    <div className={styles.pagination}>
                        <Button variant="outline" disabled>Previous</Button>
                        <span className={styles.pageInfo}>Page 1 of 3</span>
                        <Button variant="outline">Next</Button>
                    </div>
                </main>
            </div>
        </div>
    );
}
