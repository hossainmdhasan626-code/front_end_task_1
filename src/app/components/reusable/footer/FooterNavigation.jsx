import Link from "next/link";
import React from "react";

const FooterNavigation = () => {
  const data = [
    {
      id: 1,
      label: "Home",
      link: "/",
    },
    {
      id: 2,
      label: "About ",
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
      link: "#",
    },
  ];
  return (
    <div className="flex gap-10">
      {data.map((item) => (
        <Link key={item?.id} href={item?.link}>
          {item?.label}
        </Link>
      ))}
    </div>
  );
};

export default FooterNavigation;
