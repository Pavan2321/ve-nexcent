import React from "react";

const ImageDetailsSection = ({data}) => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-5">
          <div>
            <img src={data.src} alt="src" className="w-100" />
          </div>
        </div>
        <div className="col-12 col-lg-6 pe-0 pe-lg-5">
          <div>
            <h1 className="heading-2 d-gray-text pe-5">{data.title}</h1>
            <p className="body-text-2 ve-gray">{data.desc}</p>
            <button className="btn bg-green white-text px-4 py-2 my-3">
              {data.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageDetailsSection;
