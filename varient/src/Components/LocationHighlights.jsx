import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const LocationHighlights = () => {
  return (
    <div className="container py-5 bg-white text-center">
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
          <span className="px-6 py-3">LOCATION HIGHLIGHTS</span>
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
      <div className="border-top border-secondary w-25 my-3 mx-auto"></div>
      <h3 className="h4 fw-semibold text-secondary mt-3">LOCATION MAP</h3>
      <div className="row mt-4 justify-content-center align-items-center">
        <div className="col-md-6 p-3 bg-light rounded shadow">
          <img
            src="../../public/location-map-1536x606-1.jpg"
            alt="Location Map"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 mt-3 mt-md-0 d-flex flex-column gap-3 text-secondary">
          <div className="d-flex align-items-center">
            <span className="text-success fs-4 me-2">🚘</span>
            <p className="mb-0">15 KM From Ongole</p>
          </div>
          <div className="d-flex align-items-center">
            <span className="text-success fs-4 me-2">🚘</span>
            <p className="mb-0">5 Km From Gullapali Growth Centre</p>
          </div>
          <div className="d-flex align-items-center">
            <span className="text-success fs-4 me-2">🚘</span>
            <p className="mb-0">100 Mts From National Highway NH-16</p>
          </div>
          <div className="d-flex align-items-center">
            <span className="text-success fs-4 me-2">🚘</span>
            <p className="mb-0">Close to Chirala & Bapatla Beach</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHighlights;
