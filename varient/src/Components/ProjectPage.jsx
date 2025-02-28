import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center space-y-8">
      {/* Ongoing Projects Section */}
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
          <span className="px-6 py-3">OUR ONGOING PROJECTS</span>
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
      {/* Project Logo */}
      <div className="p-8 ">
        <img
          src="/Meenakshi-Icon-Blac-1.png"
          alt="Meenakshi Icon"
          className="w-20 h-20 object-contain"
          style={{ height: "150px" }}
        />
      </div>
      {/* Project Layout Section */}
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
        <span className="px-6 py-3">PROJECT LAYOUT</span>
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
    </div>
  );
};

export default ProjectSection;
