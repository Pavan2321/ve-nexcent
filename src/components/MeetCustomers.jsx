import React from "react";
import image_9 from "../assets/images/image_9.png";
import iconsConfig from "../configs/icons";

const MeetCustomers = () => {
  return (
    <section className="bg-silver py-5">
      <div className="container px-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5">
            <img src={image_9} alt="image_9" className="w-100"/>
          </div>
          <div className="col-12 col-lg-7 pe-5">
            <p className="body-text-2 ve-gray">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h4 className="heading-4 primary-text">Tim Smith</h4>
            <p className="body-text-2 ve-gray">
              British Dragon Boat Racing Association
            </p>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              {iconsConfig.map((data) => (
                <div key={data.alt}>
                  <img src={data.src} alt={data.alt} key={data.alt}/>
                </div>
              ))}
              <button className="btn primary-text py-2 my-3 heading-4">
                Meet all customers &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetCustomers;
