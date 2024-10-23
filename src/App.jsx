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
import UnseenPixelgrade from "./components/UnseenPixelgrade";
import DesignLike from "./components/DesignLike";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <OurClients />
      <ManageSystem />
      <UnseenPixelgrade />
      <HelpingItself />
      <DesignLike />
      <MeetCustomers />
      <CaringMarketing />
      <GetDemo />
      <Footer />
    </React.Fragment>
  );
}

export default App;
