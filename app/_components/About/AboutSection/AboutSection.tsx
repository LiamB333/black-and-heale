import React from "react";
import Image from "next/image";
import TeamMembers from "../TeamMembers/TeamMembers";

const teamMembers = [
  {
    imageSrc: "/about/about-people-1.jpg",
    fullName: "Hunter Ward",
    title: "Owner",
    yearInIndustry: "14",
    yearInBH: "12",
    role: "Being the first point of contact for clients, preparing quotation and designing timber kits",
  },
  {
    imageSrc: "/about/about-people-2.jpg",
    fullName: "Aiden Brown",
    title: "Owner",
    yearInIndustry: "20",
    yearInBH: "10",
    role: "Being the first point of contact for clients, preparing quotation, designing timber kits, procuring materials. Overseeing factory productions.",
  },
  {
    imageSrc: "/about/about-people-3.jpg",
    fullName: "Alex Turner",
    title: "Quantity Surveyor",
    yearInIndustry: "7",
    yearInBH: "5",
    role: "Being the first point of contact for clients, preparing quotation, designing timber kits, procuring materials. Overseeing factory productions.",
  },
];

const AboutSection = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="container mx-auto my-10 px-5">
        <section id="our-history" className="mb-20 text-center">
          <p className="text-lg mx-auto mb-6 mt-24 max-w-3xl">
            Our journey began several decades ago, fueled by a vision to offer
            unparalleled craftsmanship and innovative joinery solutions. From
            our humble beginnings, we have steadily expanded our expertise and
            capabilities, continuously elevating our standards and adapting to
            the evolving needs of the construction industry.
          </p>

          <p className="text-md mx-auto mb-6 max-w-3xl">
            Throughout the years, we have forged a path marked by a series of
            successful projects that reflect our commitment to quality and
            precision. Our dedication to excellence has earned us a solid
            reputation among clients and peers alike, establishing us as leaders
            in the field.
          </p>

          <p className="text-md mx-auto max-w-3xl">
            We take pride in our rich history, which is punctuated by a diverse
            portfolio of projects that span residential, commercial, and bespoke
            constructions.
          </p>
        </section>
      </div>

      {/* Larger Image */}
      <div className="relative w-full md:h-[400px] h-[300px] overflow-hidden">
        {" "}
        <Image
          src="/about/about-section-img.jpg"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
      </div>

      {/* Additional Sections */}
      <div className="container mx-auto my-10 px-4">
        <section id="our-team" className="mb-20 text-center mt-24">
          <h2 className="text-3xl text-center font-bold mb-5">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <TeamMembers
                key={index}
                imageSrc={member.imageSrc}
                fullName={member.fullName}
                title={member.title}
                yearInIndustry={member.yearInIndustry}
                yearInBH={member.yearInBH}
                role={member.role}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Another Larger Image */}
      <div className="relative w-full md:h-[400px] h-[300px] overflow-hidden">
        {" "}
        {/* Adjusted height */}
        <Image
          src="/about/about-section-img-2.jpg"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-5">
        <section id="our-approach" className="mb-20 mt-24 text-center">
          <h1 className="text-3xl text-center font-bold mb-5">Our Approach</h1>
          <p className="text-lg mx-auto mb-6 max-w-3xl">
            At Black & Heale, our approach is rooted in a commitment to quality,
            attention to detail, and customer satisfaction. We take pride in
            understanding our clients needs and delivering solutions that exceed
            their expectations.
          </p>
          <p className="text-md mx-auto mb-6 max-w-3xl">
            We engage closely with our clients from the initial consultation
            through to the final touches, ensuring that every aspect of the
            project aligns with their vision. Our team employs a meticulous
            process, combining traditional craftsmanship with modern technology
            to achieve the highest standards of construction. We prioritise
            clear communication and transparency throughout each phase of the
            project, fostering trust and reliability.
          </p>
          <p className="text-md mx-auto mb-6 max-w-3xl">
            By embracing innovation and continuously improving our techniques,
            we are able to address complex challenges and deliver exceptional
            results that stand the test of time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
