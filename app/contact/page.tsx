import React from "react";
import NavBar from "../_components/Header/NavBar";
import ContactHeader from "../_components/Heading/Heading";
import FAQS from "../_components/Contact/FAQs/FAQs";
import Footer from "../_components/Footer/Footer";
import ContactInfo from "../_components/Contact/ContactInfo/ContactInfo";
import ContactPage from "../_components/Contact/ContactGrid/ContactGrid";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <ContactHeader
        title="Contact Us Today"
        description="We would love to hear from you. Get in touch with Black & Heale now."
      />
      <ContactInfo />
      <ContactPage />
      <FAQS />
      <Footer
        address="Coming soon"
        phone="07768 437002"
        email="aaronblack1@hotmail.co.uk"
      />
    </div>
  );
};

export default Contact;
