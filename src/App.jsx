// src/App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OurClients from "./components/OurClients";
import ManageSystem from "./components/ManageSystem";
import UnseenPixelgrade from "./components/UnseenPixelgrade";
import HelpingItself from "./components/HelpingItself";
import DesignLike from "./components/designLike";
import MeetCustomers from "./components/MeetCustomers";
import CaringMarketing from "./components/CaringMarketing";
import GetDemo from "./components/GetDemo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
