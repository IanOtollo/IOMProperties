import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import PropertyCard from '@/components/ui/PropertyCard';
import styles from './page.module.css';

export default function Home() {
  // Placeholder mock data for featured properties
  const featuredProperties = [
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
    }
  ];

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className="animate-fade-in">Discover Your Definition of Luxury</h1>
          <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Exclusive access to the world&apos;s most prestigious properties. Elevate your living standards with IOMProperties.
          </p>
          <div className={`${styles.heroActions} animate-fade-in`} style={{ animationDelay: '0.4s' }}>
            <Link href="/properties">
              <Button size="lg" variant="primary">Explore Collection</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Speak with an Agent</Button>
            </Link>
          </div>
        </div>
        <div className={styles.heroOverlay}></div>
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Mansion"
          fill
          priority
          className={styles.heroImage}
        />
      </section>

      {/* Featured Properties Section */}
      <section className={`container ${styles.featuredSection}`}>
        <div className={styles.sectionHeader}>
          <h2>Exquisite Discoveries</h2>
          <p>Hand-picked global real estate tailored to the elite.</p>
        </div>

        <div className={styles.propertyGrid}>
          {featuredProperties.map(prop => (
            <PropertyCard key={prop.id} {...prop} />
          ))}
        </div>

        <div className={styles.viewMore}>
          <Link href="/properties">
            <Button variant="ghost">View the Full Collection &rarr;</Button>
          </Link>
        </div>
      </section>

      {/* Amenities / The IOMProperties Standard Section */}
      <section className={styles.amenitiesSection}>
        <div className={`container ${styles.amenitiesContainer}`}>
          <div className={styles.amenitiesText}>
            <h2>The IOM Standard</h2>
            <p>From the first inquiry to handing over the keys, we ensure an unparalleled journey defined by discretion, excellence, and bespoke service.</p>
            <ul className={styles.amenitiesList}>
              <li>
                <span className={styles.icon}>✦</span>
                <div>
                  <strong>Private Viewings</strong>
                  <span>Exclusive, undisturbed access securely arranged tailored to your schedule.</span>
                </div>
              </li>
              <li>
                <span className={styles.icon}>✦</span>
                <div>
                  <strong>Global Network</strong>
                  <span>Off-market opportunities unlisted to the public.</span>
                </div>
              </li>
              <li>
                <span className={styles.icon}>✦</span>
                <div>
                  <strong>Concierge Legal Support</strong>
                  <span>Seamless, hassle-free international transactions.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.amenitiesImageContainer}>
            <Image
              src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
              alt="Premium Service"
              fill
              className={styles.amenitiesImage}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
