"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderNavigationForMobile = () => {
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
    <div className="h-7 flex gap-3 ">
      {tabSectionLabels?.map((tab) => {
        const isActive = pathName === tab?.link;

        return (
          <Link
            className={
              isActive
                ? "text-primary-color font-urbanist font-semibold"
                : "text-dark-blue-color font-urbanist font-medium"
            }
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

export default HeaderNavigationForMobile;
