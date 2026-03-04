import ServicesCart from "./ServicesCart";

const ServicesCartsComponent = () => {
  const cardData = [
    {
      id: 1,
      title: "Essential Wellness",
      price: "$1120",
      sessions: 12,
      validity: "3 months",
      image: "/1.jpg",
      buttonText: "Book Session",
    },
    {
      id: 2,
      title: "Physical Therapy Package",
      price: "$1120",
      sessions: 12,
      validity: "3 months",
      image: "/2.jpg",
      buttonText: "Book Session",
    },
    {
      id: 3,
      title: "Physical Therapy",
      price: "$1120",
      sessions: 12,
      validity: "3 months",
      image: "/3.jpg",
      buttonText: "Book Session",
    },
    {
      id: 4,
      title: "Essential Wellness",
      price: "$1120",
      sessions: 12,
      validity: "3 months",
      image: "/4.jpg",
      buttonText: "Book Session",
    },
    {
      id: 5,
      title: "Preventive Health & Wellness",
      price: "$1120",
      sessions: 12,
      validity: "3 months",
      image: "/5.jpg",
      buttonText: "Book Session",
    },
    {
      id: 6,
      title: "PT Starter Program",
      price: "$1120",
      sessions: 12,
      validity: "3 months",
      image: "/6.jpg",
      buttonText: "Book Session",
    },
    {
      id: 7,
      title: "Basic Care Package",
      price: "$1120",
      sessions: 12,
      validity: "3 months",
      image: "/7.jpg",
      buttonText: "Book Session",
    },
    {
      id: 8,
      title: "Wellness Maintenance Program",
      price: "$1120",
      sessions: 12,
      validity: "3 months",
      image: "/8.jpg",
      buttonText: "Book Session",
    },
    {
      id: 9,
      title: "Extended Care Sessions",
      price: "$1120",
      sessions: 12,
      validity: "3 months",
      image: "/9.jpg",
      buttonText: "Book Session",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px]">
      {cardData.map((data) => (
        <ServicesCart key={data.id} data={data} />
      ))}
    </div>
  );
};

export default ServicesCartsComponent;
