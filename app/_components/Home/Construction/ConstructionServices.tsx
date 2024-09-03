import React from "react";
import ServiceFeature from "./ServiceFeature";
import { serviceFeatures } from "./ServiceData";
import Link from "next/link";

interface ConstructionServicesProps {
  title: string;
  paragraph: string;
}

const ConstructionServices: React.FC<ConstructionServicesProps> = ({
  title,
  paragraph,
}) => {
  return (
    <section className="flex overflow-hidden flex-col px-16 py-24 bg-zinc-100 max-md:px-5 max-md:py-24">
      <header className="flex flex-col self-center max-w-full text-center text-black w-[768px]">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h1 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-7 max-md:max-w-full">
            {paragraph}
          </p>
        </div>
      </header>
      <main className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full text-center text-black max-md:max-w-full">
          {serviceFeatures.map((feature, index) => (
            <ServiceFeature key={index} {...feature} />
          ))}
        </div>
        <div className="flex gap-6 items-center self-center pt-4 mt-12 text-base text-black max-md:mt-10">
          <Link href="/services">
            <button className="gap-2 self-stretch px-6 py-3 my-auto border hover:border-[#9CAE47] hover:text-[#9CAE47] border-black border-solid max-md:px-5">
              Learn More
            </button>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default ConstructionServices;
