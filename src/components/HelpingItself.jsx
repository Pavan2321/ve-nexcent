import React from "react";
import helpingItselfConfig from "../configs/helpingItself";

const HelpingItself = () => {
  return (
    <section className="py-5 bg-silver">
      <div className="container ">
        <div className="row d-flex align-items-center px-5">
          <div className="col-12 col-lg-6">
            <h4 className="heading-2 d-gray-text">
              Helping a local <br />
              <span className="primary-text">business reinvent itself</span>
            </h4>
            <p className="body-text-2 black-text">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="d-flex gap-5 flex-wrap ps-5">
              {helpingItselfConfig.map((data) => (
                <div key={data.desc} className="d-flex gap-3">
                  <div className="pt-2">
                    <img src={data.src} alt={data.src} height={48} width={48} />
                  </div>
                  <div>
                    <h4 className="heading-3 d-gray-text">{data.count}</h4>
                    <p className="body-text-1 ve-gray">{data.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpingItself;
