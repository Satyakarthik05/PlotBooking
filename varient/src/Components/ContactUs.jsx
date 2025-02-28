import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    pickUpDate: "",
    interest: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Form submitted successfully!");
      } else {
        setMessage("Failed to submit the form.");
      }
    } catch (error) {
      setMessage("Error: Unable to submit the form.");
    }

    setLoading(false);
  };

  return (
    <div className="container py-5">
      <h2 className="text-3xl font-bold text-blue-900 text-center">
        Contact Us
      </h2>
      <div className="row">
        <div className="col-md-7">
          <h4 className="mb-3" style={{ color: "#28a745" }}>
            BOOK SITE VISIT
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number *</label>
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email *</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Pick up Date *</label>
              <input
                type="date"
                className="form-control"
                name="pickUpDate"
                value={formData.pickUpDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Are You Interested in? *</label>
              <div>
                {["open_plots", "houses", "villas"].map((option) => (
                  <div className="form-check form-check-inline" key={option}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="interest"
                      value={option}
                      checked={formData.interest === option}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label">
                      {option.replace("_", " ")}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Location *</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-success w-100"
              disabled={loading}
            >
              {loading ? (
                <span>
                  <i className="bi bi-arrow-clockwise spin" /> Submitting...
                </span>
              ) : (
                "Book Site Visit"
              )}
            </button>
            {message && <p className="mt-3 text-center">{message}</p>}
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="col-md-5 text-center">
          <h4 className="mb-3" style={{ color: "#28a745" }}>
            CONTACT
          </h4>
          <div className="mb-3">
            <i className="bi bi-phone fs-3" style={{ color: "#28a745" }}></i>
            <p>+91-7796356789</p>
          </div>
          <div className="mb-3">
            <i className="bi bi-envelope fs-3" style={{ color: "#28a745" }}></i>
            <p>info@variantinfra.com</p>
          </div>
          <div>
            <i className="bi bi-geo-alt fs-3" style={{ color: "#28a745" }}></i>
            <p>7th Lane, Beside Arundelpet Police Station, Brodipet, Guntur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
