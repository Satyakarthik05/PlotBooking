import React from "react";

const amenities = [
  { name: "Club House", icon: "/clubhouse.png" },
  { name: "Swimming Pool", icon: "/swimmer.png" },
  { name: "Game Zone", icon: "/basketball.png" },
  { name: "Gym", icon: "/exercise.png" },
  { name: "Pergola", icon: "/pergola.png" },
  { name: "Park", icon: "/park-2.png" },
];

const Amenities = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div
        className="flex items-center gap-4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/heading-shape-2.png"
          alt="Decorative"
          //   className="w-16 h-8 object-contain"x`
          style={{ width: "90px" }}
        />
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">
          AMENITIES
        </h2>
        <img
          src="/heading-shape.png"
          alt="Decorative"
          //   className="w-16 h-8 object-contain"
          style={{ width: "90px" }}
        />
      </div>
      <div
        className="flex flex-wrap justify-center items-center gap-6 mt-30"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
        {amenities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-16 h-16 object-contain"
              style={{ width: "120px" }}
            />
            <p className="text-lg font-medium text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
