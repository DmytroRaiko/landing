import React  from 'react';
import Header from '../../components/Header';
import HomeContent from "../../components/Home";
import Mobile from "../../components/Header/Mobile";
import './home.scss';
import PropTypes from "prop-types";

const Home = ({ isMobile }) => {
  return (
    <section className="home">
      {isMobile
        ? <Mobile />
        : <Header />
      }
      <HomeContent />
    </section>
  );
};

Home.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Home;
