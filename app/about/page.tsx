import React from "react";
import Heading from "../_components/About/Heading/Heading";
import NavBar from "../_components/Header/NavBar";
import Footer from "../_components/Footer/Footer";
import Hero from "../_components/About/Hero/Hero";
import { BottomHero } from "../_components/About/BottomHero/BottomHero";
import { MilestonesSection } from "../_components/About/Milestone/MilestoneSection";
import TestimonialSlider from "../_components/Testimonial/TestimonialSlider";
import { TopSection } from "../_components/About/TopSection/TopSection";
import TeamMember from "../_components/About/TeamMembers/TeamMembers";

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

const features = [
  {
    title: "Our Expertise",
    description:
      "From planning to execution, we have the skills and knowledge to handle your project from start to finish.",
  },
  {
    title: "Our success",
    description:
      "We have a proven track record of delivering high-quality construction solutions to our clients.",
  },
];

const About = () => {
  const teamMembers = [
    {
      imageSrc: "/Our-team-1.jpg",
      name: "John Black",
      title: "CEO",
      description: "John is an expert in technology and innovation.",
      socialIcons: ["/icons/facebook.svg", "/icons/linkedin.svg"],
    },
    {
      imageSrc: "/Our-team-2.jpg",
      name: "Kyle Adams",
      title: "Director",
      description: "Kyle is an expert in technology and innovation.",
      socialIcons: ["/icons/facebook.svg", "/icons/linkedin.svg"],
    },
    {
      imageSrc: "/Our-team-3.jpg",
      name: "James Tyson",
      title: "Director",
      description: "James is an expert in technology and innovation.",
      socialIcons: ["/icons/facebook.svg", "/icons/linkedin.svg"],
    },
  ];
  return (
    <div>
      <NavBar />
      <Hero
        title="Experienced"
        subtitle="Building Your Dreams with Quality Craftsmanship"
        description="At Black & Heale, we are a team of time-served joiners with a strong background in the construction industry. Whether it's commercial or private, we have the expertise to plan and organise your entire project from start to finish."
      />
      <Heading
        title="Meet Our Team"
        description="Get to know the talented individuals behind our success."
      />
      <div className="flex px-16">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            imageSrc={member.imageSrc}
            name={member.name}
            title={member.title}
            description={member.description}
            socialIcons={member.socialIcons}
          />
        ))}
      </div>
      <TopSection
        title="Experienced Joinery Experts"
        description="With a strong background in the construction industry, Black & Heale is your trusted partner for all joinery needs."
        backgroundImageSrc="/bg-3.jpg"
      />
      <TestimonialSlider testimonials={testimonials} />
      <MilestonesSection
        title="Highlighting the Milestones and Achievements of Our Company"
        description="At Black & Heale, we take pride in our numerous accomplishments and milestones. With our extensive experience in the construction industry, we have successfully completed a wide range of commercial and private projects."
        features={features}
        imageSrc="/bg-4.jpg"
        colour="#f4f4f5"
      />
      <BottomHero
        title="Expert Joiners Delivering Quality Work"
        description="Contact us today to discuss your next construction project. We're here to help!"
        imageSrc="/bg-13.jpg"
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
