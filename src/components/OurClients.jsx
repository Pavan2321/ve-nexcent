import React from "react";
import ourClientImages from "../assets/configs/ourClients";

const OurClients = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h1 className="d-gray-text heading-2">Our Clients</h1>
        <p className="body-text-1 ve-gray">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="d-flex justify-content-between pt-4">
          {ourClientImages.map((data) => (
            <img src={data.src} alt={data.alt} key={data.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
