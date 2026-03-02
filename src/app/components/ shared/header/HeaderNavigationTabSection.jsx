"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderNavigationTabSection = () => {
  const pathName = usePathname();

  // mockData
  const tabSectionLabels = [
    {
      id: 1,
      label: "Home",
      link: "/",
    },
    {
      id: 2,
      label: "About",
      link: "/about",
    },
    {
      id: 3,
      label: "Services",
      link: "/services",
    },
    {
      id: 4,
      label: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="h-7 flex gap-10">
      {tabSectionLabels?.map((tab) => {
        const isActive = pathName === tab?.label;

        return (
          <Link
            className={isActive ? "text-primary-color" : "text-dark-blue-color"}
            key={tab?.id}
            href={tab?.link}
          >
            {tab?.label}
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderNavigationTabSection;
