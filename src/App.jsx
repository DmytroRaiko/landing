import React, { useEffect, useState } from 'react';
import Home from './containers/Home/Home';
import Team from './containers/Team/Team';
import SignIn from "./containers/SignIn/SignIn";
import Information from "./containers/Information/Information";
import Slider from "./containers/Slider/Slider";
import Footer from "./containers/Footer/Footer";
import './style.scss';

function App() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 1280;

  return (
    <main>
      <Home isMobile={isMobile} />
      <Team />
      <SignIn />
      <Information />
      <Slider isMobile={isMobile} />
      <Footer />
    </main>
  );
}

export default App;
