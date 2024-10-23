// src/App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OurClients from "./components/OurClients";
import ManageSystem from "./components/ManageSystem";
import HelpingItself from "./components/HelpingItself";
import MeetCustomers from "./components/MeetCustomers";
import CaringMarketing from "./components/CaringMarketing";
import GetDemo from "./components/GetDemo";
import Footer from "./components/Footer";
import ImageDetailsSection from "./components/imageDetailsSection";
import sectionsData from "./configs/sectionsData";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <OurClients />
      <ManageSystem />
      <ImageDetailsSection data={sectionsData.Pixelgrade} />
      <HelpingItself />
      <ImageDetailsSection data={sectionsData.designLike} />
      <MeetCustomers />
      <CaringMarketing />
      <GetDemo />
      <Footer />
    </React.Fragment>
  );
}

export default App;
