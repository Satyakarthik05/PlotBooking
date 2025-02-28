import React from "react";
import { motion } from "framer-motion";

const images = [
  "../../public/IMG-20240704-WA0007.jpg",
  "../../public/IMG-20240704-WA0011.jpg",
  "../../public/IMG-20240704-WA0005.jpg",
  "../../public/IMG-20240704-WA0001-1.jpg",
  "../../public/IMG-20240704-WA0012.jpg",
  "../../public/IMG-20240704-WA0013.jpg",
  "../../public/IMG-20240704-WA0006.jpg",
  "../../public/IMG-20240704-WA0003.jpg",
  "../../public/IMG-20240704-WA0010.jpg",
  "../../public/IMG-20240704-WA0008.jpg",
  "../../public/IMG-20240704-WA0002.jpg",
  "../../public/IMG-20240704-WA0009.jpg",
];

const Gallery = () => {
  return (
    <div className="bg-white py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-900 items-center">
        <div
          className="items-center space-y-4"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.img
            src="/heading-shape-2.png"
            alt="Decorative"
            className="w-24 h-24 object-contain"
            style={{ width: "100px" }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <span className="px-6 py-3">Gallery</span>
          <motion.img
            src="/heading-shape.png"
            alt="Decorative"
            className="w-16 h-8 object-contain"
            style={{ width: "100px" }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </h2>
      <div
        className="flex flex-wrap justify-center gap-4 px-10 max-w-6xl"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-[300px] h-[200px] object-cover rounded-[30px] shadow-lg"
              style={{ width: "300px", borderRadius: "20px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
