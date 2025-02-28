import React from "react";
import Image from "../../public/Variant-Infra-1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroImage = () => {
  return (
    <div className="container-fluid p-0">
      <img
        src={Image}
        alt="Hero"
        className="img-fluid w-100"
        style={{ height: "auto", maxHeight: "600px", objectFit: "cover" }}
      />
    </div>
  );
};

export default HeroImage;
