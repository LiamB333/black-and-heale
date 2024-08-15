import React from "react";
import NavBar from "./_components/Header/NavBar";
import Footer from "./_components/Footer/Footer";
import Hero from "./_components/Home/Hero/Hero";
import Services from "./_components/Home/Hero/Services/Services";

const joineryFeatures = [
  "Customised Joinery Solutions for Commercial Spaces",
  "High-Quality Joinery Services for Private Residences",
  "Reliable and Professional Joinery Services for Every Project",
];

const testimonials = [
  {
    logoSrc: "/Our-team-4.jpg",
    quote:
      "Our experience with Black & Heale was exceptional. They delivered high-quality work and completed the project on time.",
    authorName: "Nigel Bromley",
    authorTitle: "CEO, Example Corp",
    authorImageSrc: "/Our-team-4.jpg",
  },
  {
    logoSrc: "/Our-team-5.jpg",
    quote:
      "Working with Black & Heale was a pleasure. Their attention to detail and commitment to excellence exceeded our expectations.",
    authorName: "Jane Smith",
    authorTitle: "CTO, Another Corp",
    authorImageSrc: "/Our-team-5.jpg",
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
        imageSrc="/bg-10.jpg"
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
