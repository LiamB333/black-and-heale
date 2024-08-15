import React from "react";

const FooterLinks: React.FC = () => {
  const linkGroups = [
    [
      { label: "About Us", url: "/about" },
      { label: "Contact Us", url: "/contact" },
      { label: "Services", url: "/services" },
      { label: "Projects", url: "/projects" },
    ],
  ];

  return (
    <nav className="flex flex-wrap gap-6 items-start text-base font-semibold text-black max-md:flex-col max-md:items-center max-md:space-y-4">
      {linkGroups.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className={`flex flex-col max-md:w-full max-md:items-center ${
            groupIndex === 1 ? "md:flex hidden" : ""
          }`}
        >
          {group.map((link, linkIndex) => (
            <a
              key={linkIndex}
              href={link.url}
              className={linkIndex > 0 ? "mt-3 max-md:mt-1" : "max-md:mt-1"}
            >
              {link.label}
            </a>
          ))}
        </div>
      ))}
    </nav>
  );
};

export default FooterLinks;
