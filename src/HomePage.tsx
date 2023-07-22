// src/HomePage.tsx
import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {
    const images = [
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/500",
        "https://via.placeholder.com/500",
    ]

    return (
        <div>
        <main>
            <section className={styles.darkBlueBackground}>
            <h2 className={styles.heading}>Okanagan Marine Design</h2>
            <img className={styles.image} src="https://via.placeholder.com/500" alt="placeholder" />
            <p className={styles.para}>The Okanagan Marine Design Club located at the University of British Columbia Okangan campus, is a dynamic and newly established club, poised to redefine and broaden the horizons of marine technology through innovation, collaboration, and sustainable practices. As a fresh and enthusiastic community, we are excited for the exciting journey that lies ahead.</p>
            <p className={styles.para}>Incepted with a vision to inspire, engage, and pioneer advancements in marine technology, we've established two integral subdivisions within our club: Electric Propulsion Boats and Autonomous Underwater Vehicles.</p>
            </section>
            <section className={styles.navyBlueBackground}>
            <h2>Our Goals</h2>
            <p>Our aim is to excel in the field of marine design by fostering creativity, innovation, and teamwork.</p>
            </section>
            <section className={styles.imageSection}>
            {images.map((image, index) => (
                <img 
                key={index} 
                className={styles.image} 
                src={image} 
                alt={`placeholder ${index}`} 
                />
            ))}
            </section>
            {/* <section className={styles.imageSection}>
            <img className={styles.image} src="https://via.placeholder.com/500" alt="placeholder" />
            </section> */}
        </main>
        </div>
    );
}

export default HomePage;
