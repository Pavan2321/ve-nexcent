import React from "react";
import pana from "../assets/images/pana.png";

const DesignLike = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-5">
          <img src={pana} alt="pana" />
        </div>
        <div className="col-6 pe-5">
          <h1 className="heading-2 d-gray-text pe-5">
            How to design your site footer like we did
          </h1>
          <p className="body-text-2 ve-gray">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="btn bg-green white-text px-4 py-2 my-3">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignLike;
