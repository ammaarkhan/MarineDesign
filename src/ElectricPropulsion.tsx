// src/TheTeam.tsx
import React from 'react';
import styles from './ElectricPropulsion.module.css';

function ElectricPropulsion() {
  return (
    <div>
      <main>
        <section className={styles.darkBlueBackground}>
          <h2>Electric Propulsion Boats</h2>
          <img className={styles.image} src="https://via.placeholder.com/500" alt="placeholder" />
          <p>Welcome to the Okanagan Marine Design Club at UBCO, a dynamic and newly established club, poised to redefine and broaden the horizons of marine technology through innovation, collaboration, and sustainable practices. As a fresh and enthusiastic community, we are excited for the exciting journey that lies ahead.</p>
        </section>
        <section className={styles.navyBlueBackground}>
          <h2>Our Goals</h2>
          <p>Our aim is to excel in the field of marine design by fostering creativity, innovation, and teamwork.</p>
        </section>
        <section className={styles.imageSection}>
          <img className={styles.image} src="https://via.placeholder.com/500" alt="placeholder" />
        </section>
      </main>
    </div>
  );
}

export default ElectricPropulsion;
