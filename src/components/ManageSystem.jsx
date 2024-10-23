import React from "react";
import manageSystemConfig from "../configs/manageSystem";

const ManageSystem = () => {
  return (
    <section className="text-center">
      <div className="container">
        <h1 className="heading-2 d-gray-text">
          Manage your entire community in a single system
        </h1>
        <p className="body-text-1 ve-gray">Who is Nextcent suitable for?</p>
        <div className="d-flex flex-wrap  justify-content-center gap-5 pt-4">
          {manageSystemConfig.map((data) => (
            <div key={data.title} className="card-shadow ve-card pb-3">
              <img src={data.src} alt={data.title} />
              <h4 className="heading-3 d-gray-text pt-3">{data.title}</h4>
              <p className="body-text-2 ve-gray">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManageSystem;
