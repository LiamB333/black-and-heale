import React from "react";
import Footer from "../_components/Footer/Footer";
import CTA from "../_components/Home/CTA/CTA";
import TopSection from "../_components/TopSection";
import StickyBar from "../_components/StickyBar";
import GeneralNavBar from "../_components/GeneralNavBar";

const sections = [
  { id: "all", label: "All" },
  { id: "commercial", label: "Commercial" },
  { id: "residential", label: "Residential" },
  { id: "new", label: "New build" },
  { id: "roofing", label: "Roofing" },
];

const Projects = () => {
  return (
    <div>
      <GeneralNavBar />
      <TopSection
        title="Our Projects"
        description="See our work, where quality and craftsmanship shine in every project."
        imageSrc="/projects/projects-hero.jpg"
      />
      <StickyBar sections={sections} />
      <CTA
        imgSrc="/projects/projects-cta.jpg"
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

export default Projects;
