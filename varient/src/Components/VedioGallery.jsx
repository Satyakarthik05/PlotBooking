import React from "react";
import { motion } from "framer-motion";

const VideoGallery = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="text-3xl font-bold text-blue-900">
        <div className="d-flex flex-column align-items-center gap-3">
          <motion.img
            src="/heading-shape-2.png"
            alt="Decorative"
            className="w-24 h-24 object-contain"
            style={{ width: "100px" }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <span className="px-6 py-3">Video Gallery</span>
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
      <div className="d-flex justify-content-center mt-4">
        <video width="70%" controls className="rounded-3 shadow-lg">
          <source src="../../public/Meenakshi-Final_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoGallery;
