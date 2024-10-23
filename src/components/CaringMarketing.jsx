import React from "react";
import caringMarketingConfig from "../configs/caringMarking";

const CaringMarketing = () => {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <h1 className="heading-2 d-gray-text">Caring is the new marketing</h1>
        <p className="body-text-1 ve-gray w-75 m-auto">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
        <div className="d-flex gap-5 justify-content-center pt-4 flex-wrap">
          {caringMarketingConfig.map((data) => (
            <div key={data.title} className="caringMarketingImageContainer ">
              <img src={data.src} alt={data.title} />
              <div className="ve-card-2 border-0 card-shadow-2 bg-silver d-none d-lg-block">
                <h4 className="heading-4 ve-gray pt-3">{data.title}</h4>
                <button className="btn primary-text heading-4">{data.btn} &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaringMarketing;
