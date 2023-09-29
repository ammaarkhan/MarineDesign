import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import styles from "./style";
import {
  Navbar,
  Hero,
  About,
  Ourgoal,
  Ourprojects,
  Footer,
  Sponsorships,
  Joinus,
} from "./components";

const Main = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash === "#projects") {
      setTimeout(() => {
        const targetSection = document.querySelector(location.hash);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Adjust the delay if necessary
    }
  }, [location]);

  return (
    <div className="bg-blue-50 w-full overflow-hidden">
      <div className="relative min-h-screen">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
            {/* <div>hi</div> */}
          </div>
        </div>

        <div className="pb-20">
          <Routes>
            <Route
              path="/"
              element={
                <div className={`${styles.flexStart}`}>
                  <div className={`${styles.boxWidth}`}>
                    <Hero />
                    <About />
                    <Ourgoal />
                    <Ourprojects />
                  </div>
                </div>
              }
            />
            <Route
              path="/sponsorships"
              element={
                <div className={`${styles.flexStart}`}>
                  <div className={`${styles.boxWidth}`}>
                    <Sponsorships />
                  </div>
                </div>
              }
            />
            <Route
              path="/joinus"
              element={
                <div className={`${styles.flexStart} h-full`}>
                  <div className={`${styles.boxWidth} h-full`}>
                    <Joinus />
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <Main />
  </Router>
);

export default App;
