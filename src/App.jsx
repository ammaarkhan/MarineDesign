import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import styles from './style';
import { Navbar, Hero, About, Ourgoal, Ourprojects, Footer, Sponsorships, Joinus } from './components';

const Main = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash === "#projects") {
        setTimeout(() => {
            const targetSection = document.querySelector(location.hash);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Adjust the delay if necessary
    }
}, [location]);


  return (
    <div className='bg-white w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          {/* <div>hi</div> */}
        </div>
      </div>
      
      <Routes>
        <Route path="/" element={
          <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
              <About />
              <Ourgoal />
              <Ourprojects />
              <Footer />
            </div>
          </div>
        } />
        
        <Route path="/sponsorships" element={
          <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Sponsorships />
              <Footer />
            </div>
          </div>
        } />

        <Route path="/joinus" element={
          <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Joinus />
              <Footer />
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <Main />
  </Router>
);

export default App;