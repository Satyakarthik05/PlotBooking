import React from "react";

import TopBar from "./Components/TopBar";
import CustomNavbar from "./Components/CustomNavbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HeroImage from "./Components/HeroImage";
import ImgCont from "./Components/ImgCont";
import ProjectPage from "./Components/ProjectPage";
import Gimage from "./Components/Gimage";
import Amenities from "./Components/Anemeties";
import SiteHighlights from "./Components/SiteHighlights";
import Gallery from "./Components/Gallery";
import VedioGallery from "./Components/VedioGallery";
import LocationHighlights from "./Components/LocationHighlights";
import ContactForm from "./Components/ContactUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <CustomNavbar />
      <HeroImage />
      <ImgCont />
      <ProjectPage />
      <Gimage />
      <Amenities />
      <SiteHighlights />
      <Gallery />
      <VedioGallery />
      <LocationHighlights />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
