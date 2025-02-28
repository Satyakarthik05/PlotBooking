import React from "react";
import Image from "../../public/Layout-1536x757-1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Gimage = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center p-3"
      style={{ minHeight: "100vh" }}
    >
      <img
        src={Image}
        alt="Hero"
        className="img-fluid"
        style={{
          width: "70%",
          height: "auto",
          maxHeight: "600px",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />
    </div>
  );
};

export default Gimage;
