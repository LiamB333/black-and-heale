import React from "react";
import NavBar from "../_components/Header/NavBar";
import Heading from "../_components/About/Heading/Heading";
import Portfolio from "../_components/Portfolio/Portfolio";
import TestimonialSlider from "../_components/Testimonial/TestimonialSlider";
import CTA from "../_components/CTA/CTA";
import Footer from "../_components/Footer/Footer";
import ContactHeader from "../_components/Heading/Heading";

const portfolio = [
  {
    image: "/bg-7.jpg",
    text: "I had an excellent renovation experience with BuildBright. Their team was highly skilled and attentive to my needs.",
    author: "Jane Doe",
    role: "Property Owner",
    logo: "/logo.svg",
  },
  {
    image: "/bg-16.jpg",
    text: "BuildBright transformed our office space wonderfully. The project was completed on time and exceeded our expectations.",
    author: "John Doe",
    role: "Business Owner",
    logo: "/logo.svg",
  },
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

const Commercial = () => {
  return (
    <div>
      <NavBar />
      <ContactHeader
        title="Quality Commercial Joinery"
        description="Transforming spaces with expert craftsmanship and attention to detail."
      />
      <Portfolio portfolio={portfolio} />
      <TestimonialSlider testimonials={testimonials} />
      <CTA
        title="Transforming Your Vision Into Reality"
        description="Contact us today for a detailed consultation or quote for your construction projects."
      />
      <Footer
        address="Coming soon"
        phone="07768 437002"
        email="aaronblack1@hotmail.co.uk"
      />
    </div>
  );
};

export default Commercial;
