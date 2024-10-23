import React from "react";
import heroImage from "../assets/images/Illustration.png";

const HeroSection = () => {
  return (
    <section className="bg-silver">
      <div className="container py-5 px-5 mx-auto">
        <div className="row justify-content-center align-items-center">
          <div className="col-8 px-5">
            <h1 className="heading-1">
              Lessons and insights{" "}
              <span className="primary-text">from 8 years</span>
            </h1>
            <p className="body-text-1 ve-gray mt-3">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div className="btn bg-green white-text px-4 py-2 ve-radius mt-3">
              Register
            </div>
          </div>
          <div className="col-4">
            <img src={heroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
