import React from "react";
import Footer from "../_components/Footer/Footer";
import Hero from "../_components/About/Hero/Hero";
import SectionNavBar from "../_components/About/SectionNavBar/SectionNavBar";
import AboutSection from "../_components/About/AboutSection/AboutSection";
import CTA from "../_components/Home/CTA/CTA";
import GeneralNavBar from "../_components/GeneralNavBar";

const About = () => {
  const sections = [
    { id: "our-history", label: "Our History" },
    { id: "our-team", label: "Our Team" },
    { id: "our-approach", label: "Our Approach" },
  ];

  return (
    <div>
      <GeneralNavBar />
      <Hero
        title="Building Your Dreams with Quality Craftsmanship"
        description="At Black & Heale, we are a team of time-served joiners with a strong background in the construction industry. Whether it's commercial or private, we have the expertise to plan and organise your entire project from start to finish."
        imageSrc="/about/about-hero.jpg"
      />
      <SectionNavBar sections={sections} />
      <AboutSection />
      <CTA
        imgSrc="/about/about-cta.jpg"
        title="Transforming Spaces with Expert Craftsmanship"
        subtitle="Contact us today for a consultation or quote on your construction project."
      />
      <Footer
        address="Coming soon"
        phone="07768 437002"
        email="aaronblack1@hotmail.co.uk"
      />
    </div>
  );
};

export default About;
