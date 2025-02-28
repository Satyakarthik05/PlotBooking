import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ImgCont() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Side Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="col-lg-6"
        >
          <h6 className="text-uppercase text-primary">About Variant Infra</h6>
          <h2 className="fw-bold text-dark mt-2">
            Building Harmonious Homes and Relationships
          </h2>
          <p className="text-muted mt-3">
            Building quality homes is about passion more than profession. For
            over decades, this has been the working philosophy that has led
            Variant Infra to become one of the most respected real estate
            companies in Guntur-Vijayawada and Ongole. Under their able
            leadership, Variant Infra has come a long way, leaving behind
            footprints of excellence across the length and breadth of the city.
            Thanks to their futuristic vision, Variant Infra as a brand is today
            synonymous with Trust, Quality, Assurance, Ethics, Transparency, and
            Affordability. Every single residential or commercial property
            bearing the Harischandra Townships insignia is a fine specimen of
            the highest standards that transcends customer expectations
            consistently.
          </p>
          <button className="btn btn-primary mt-4 px-4 py-2 rounded-pill">
            Know More →
          </button>
        </motion.div>

        {/* Right Side Images */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="col-lg-6 d-flex flex-column align-items-center"
        >
          {/* Wrapper for the first image and the two smaller images */}
          <div className="position-relative w-100">
            {/* Full-width main image */}
            <img
              src="../../public/about_img_tall-1.webp"
              alt="Luxury Home"
              className="img-fluid rounded shadow-lg"
              style={{ width: "50%", height: "auto" }}
            />

            {/* Two smaller images positioned to the right */}
            <div
              className="position-absolute d-flex flex-column gap-3"
              style={{ top: "10%", right: "0", width: "40%" }}
            >
              <img
                src="../../public/about_img_sqaure-1.webp"
                alt="Modern Terrace"
                className="img-fluid rounded shadow-lg"
                style={{ width: "100%", height: "auto" }}
              />
              <img
                src="../../public/about_img_wide-1024x697-1.webp"
                alt="Relaxing Space"
                className="img-fluid rounded shadow-lg"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
