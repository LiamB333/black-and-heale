import React from "react";
import NavBar from "../_components/Header/NavBar";
import { CommercialSolutions } from "../_components/Services/Commercial/CommercialSolutions";
import TestimonialCard from "../_components/Services/Testimonial/TestimonialSection";
import TestimonialSlider from "../_components/Testimonial/TestimonialSlider";
import Footer from "../_components/Footer/Footer";

import CTA from "../_components/CTA/CTA";
import Heading from "../_components/About/Heading/Heading";
import ContactHeader from "../_components/Heading/Heading";

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

const Services = () => {
  return (
    <div>
      <NavBar />
      <ContactHeader
        title="Quality Construction Services"
        description="We offer a wide range of construction services, tailored to meet your needs."
      />
      <CommercialSolutions
        title="Commercial Joinery Services for Your Construction Projects"
        subtitle="Commercial"
        description="At Black & Heale, we specialise in providing top-notch joinery services for commercial construction projects. With our extensive experience and expertise, we can handle all types of joinery work, ensuring high-quality results that meet your specific requirements."
        imageSrc="/bg-11.jpg"
        learnMoreUrl="/commercial"
      />
      <CommercialSolutions
        title="Private Joinery Services for Your Projects"
        subtitle="Private"
        description="At Black & Heale, we specialise in providing high-quality joinery services for private projects. Our team of experienced joiners has a deep understanding of the construction industry and can handle a wide range of projects from start to finish."
        imageSrc="/bg-4.jpg"
        bgColor="bg-[#f4f4f5]"
        learnMoreUrl="/private"
      />
      <TestimonialCard
        imageSrc="/bg-17.jpg"
        rating={1}
        testimonial="Working with Black & Heale on my private joinery project was a great experience. They were professional, efficient, and delivered exceptional results."
        author="John Smith"
        role="Homeowner"
        companyLogo="/logo.svg"
      />
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

export default Services;
