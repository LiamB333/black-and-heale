import React from "react";
import { CommercialSolutions } from "../_components/Services/Commercial/CommercialSolutions";
import Footer from "../_components/Footer/Footer";
import CTA from "../_components/Home/CTA/CTA";
import TopSection from "../_components/TopSection";
import GeneralNavBar from "../_components/GeneralNavBar";

const Services = () => {
  return (
    <div>
      <GeneralNavBar />
      <TopSection
        title="Our Services"
        description="Tailored solutions for all your joinery needs."
        imageSrc="/services/services-hero.jpg"
      />
      <CommercialSolutions
        title="Design and Build"
        description="Transform your commercial vision into reality with our comprehensive Design and Build services. From concept to completion, we seamlessly integrate design, engineering, and construction to deliver functional and aesthetically pleasing structures tailored to your business needs."
        imageSrc="/services/design-and-build.jpg"
        learnMoreUrl="/commercial"
      />
      <CommercialSolutions
        title="Project Management"
        description="Navigating the complexities of construction is easier with our expert project management. We oversee every phase, ensuring timelines, budgets, and quality standards are met, so you can focus on your core business while we handle the details."
        imageSrc="/services/project-management.jpg"
        bgColor="bg-[#f4f4f5]"
        learnMoreUrl="/private"
        isInverted={true}
      />
      <CommercialSolutions
        title="New Construction"
        description="Breaking new ground? We specialise in new construction, bringing innovation, precision, and craftsmanship to every project. Whether it’s a large-scale commercial development or a bespoke building, our expertise ensures a strong foundation for your future."
        imageSrc="/services/new-build.jpg"
        learnMoreUrl="/private"
      />
      <CommercialSolutions
        title="Roofing Services"
        description="Protect your investment with our comprehensive roofing services. We offer durable, weather-resistant roofing solutions tailored to your specific requirements. From installation to repair, we ensure your building stays safe and secure from the top down"
        imageSrc="/services/roofing.jpg"
        bgColor="bg-[#f4f4f5]"
        learnMoreUrl="/private"
        isInverted={true}
      />
      <CTA
        imgSrc="/services/services-cta.jpg"
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

export default Services;
