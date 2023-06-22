import React from "react";

const TopButton = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Kathmandu",
    },
    {
      id: 2,
      title: "Pokhara",
    },
    {
      id: 3,
      title: "Dharan",
    },
    {
      id: 4,
      title: "Jhapa",
    },
    {
      id: 5,
      title: "Doti",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city, index) => (
        <button
          className="text-white text-lg font-medium"
          key={index}
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
