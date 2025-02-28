import React from "react";
import { Envelope, Telephone } from "react-bootstrap-icons";

const TopBar = () => {
  return (
    <div
      className=" text-white py-2 px-3"
      style={{ width: "100vw", backgroundColor: "#07244E" }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
        {/* Left Side: Email & Phone */}
        <div className="d-flex align-items-center gap-3">
          <div>
            <Envelope className="me-1" />
            <a
              href="mailto:info@variantinfra.com"
              className="text-white text-decoration-none"
            >
              info@variantinfra.com
            </a>
          </div>
          <div className="d-none d-md-block">
            <Telephone className="me-1" />
            <span>IN: 77963 56789</span>
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="d-flex gap-2 mt-2 mt-md-0">
          <a href="#" className="text-white text-decoration-none">
            Newsletter
          </a>{" "}
          |
          <a href="#" className="text-white text-decoration-none">
            Blogs
          </a>{" "}
          |
          <a href="#" className="text-white text-decoration-none">
            Testimonials
          </a>{" "}
          |
          <a href="#" className="text-white text-decoration-none">
            Careers
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
