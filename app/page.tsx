import React from "react";
import NavBar from "./_components/Header/NavBar";
import Footer from "./_components/Footer/Footer";
import Hero from "./_components/Home/Hero/Hero";
import Services from "./_components/Home/Services/Services";
import ConstructionServices from "./_components/Home/Construction/ConstructionServices";
import QualityServices from "./_components/Home/QualityServices/QualityServices";
import CTA from "./_components/Home/CTA/CTA";
import TestimonialSlider from "./_components/Testimonial/TestimonialSlider";

const joineryFeatures = [
  "Customised Joinery Solutions for Commercial Spaces",
  "High-Quality Joinery Services for Private Residences",
  "Reliable and Professional Joinery Services for Every Project",
];

const testimonials = [
  {
    quote:
      "Our experience with Black & Heale was exceptional. They delivered high-quality work and completed the project on time.",
    authorName: "Nigel Bromley",
    authorTitle: "CEO, Example Corp",
  },
  {
    quote:
      "Working with Black & Heale was a pleasure. Their attention to detail and commitment to excellence exceeded our expectations.",
    authorName: "Jane Smith",
    authorTitle: "CTO, Another Corp",
  },
];

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero
        title="Expert Joinery and Construction Services"
        description="Transforming spaces with our exceptional craftsmanship and attention to detail."
      />
      <Services
        bgColor="bg-white"
        features={joineryFeatures}
        title="Expert Joinery Services for Commercial and Private Projects"
        imageSrc="/home/home-services.jpg"
      />
      <ConstructionServices
        title="Experience the Best in Construction Services"
        paragraph="At Black & Heale, we pride ourselves on providing quality
            craftsmanship, comprehensive project management, and timely
            delivery. With our team of experienced joiners and extensive
            background in the construction industry, we can plan and organise
            your full job from start to finish."
      />
      <QualityServices
        title="Quality Construction Services for Every Project"
        paragraph="At Black & Heale, we offer a wide range of construction services to
          meet the needs of both commercial and private clients. Our team of
          experienced joiners can handle every aspect of your project, from
          planning to completion. With our attention to detail and commitment to
          quality, you can trust us to deliver exceptional results."
      />
      <TestimonialSlider testimonials={testimonials} />
      <CTA
        title="Transforming Spaces with Expert Craftsmanship"
        subtitle="Contact us today for a consultation or quote on your construction project."
        imgSrc="/home/home-cta.jpg"
      />
      <Footer
        address="Coming soon"
        phone="07768 437002"
        email="aaronblack1@hotmail.co.uk"
      />
    </div>
  );
};

export default Home;
