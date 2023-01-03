import React from 'react';
import Address from "../../components/Footer/Address";
import Contacts from "../../components/Footer/Contacts";
import './footer.scss';
import SocialMedia from "../../components/Footer/SocialMedia";

const Footer = () => {
  return (
    <section className="footer">
      <Contacts />
      <Address />
      <SocialMedia />
    </section>
  );
};

export default Footer;
