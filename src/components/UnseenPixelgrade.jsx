import React from "react";
import rafiki from "../assets/images/rafiki.png";

const UnseenPixelgrade = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-5">
          <div>
            <img src={rafiki} alt="rafiki" className="w-100" />
          </div>
        </div>
        <div className="col-12 col-lg-6 pe-0 pe-lg-5">
          <div>
            <h1 className="heading-2 d-gray-text pe-5">
              The unseen of spending three years at Pixelgrade
            </h1>
            <p className="body-text-2 ve-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn bg-green white-text px-4 py-2 my-3">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnseenPixelgrade;
