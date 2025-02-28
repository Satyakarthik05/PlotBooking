import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const highlights = [
  { image: "plotting-1-1.png", text: "180 Plots Starting from 260 Sq.yds" },
  { image: "duplex-1.png", text: "Simplex and Duplex Houses" },
  { image: "green-roof-1.png", text: "DTCP Approved Plots 30% Green Cover" },
  { image: "plot-2-1.png", text: "20 Acres" },
  { image: "policeman-1.png", text: "Round-the-clock Security" },
  { image: "tank-1.png", text: "Overhead Water Tank" },
  { image: "compass-1.png", text: "100% Vastu Compliant" },
  { image: "forest.png", text: "Avenue Plantation" },
  { image: "plot-1.png", text: "Residential Plots" },
  { image: "entrance.png", text: "Grand Entrance Arch" },
  { image: "solar-cell.png", text: "Solar Fencing Boundary" },
  { image: "drainage-systems.png", text: "Drainage" },
  { image: "road-1.png", text: "CC Roads" },
  { image: "cctv.png", text: "CC Cameras" },
  { image: "sport.png", text: "Open Air Theatre" },
];

const SiteHighlights = () => {
  return (
    <div className="text-center p-4">
      <h2
        className="text-3xl font-bold text-blue-900 flex flex-col items-center space-y-4"
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
          className="w-16 h-8 object-contain"
          style={{ width: "100px" }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <span className="px-6 py-3">Site Highlights</span>
        <motion.img
          src="/heading-shape.png"
          alt="Decorative"
          className="w-16 h-8 object-contain"
          style={{ width: "100px" }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </h2>
      <div className="container">
        <div className="row g-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center"
            >
              <img
                src={`public/${item.image}`}
                alt={item.text}
                className="img-fluid mb-2"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              <p className="text-center small fw-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SiteHighlights;
