import React from "react";
import whiteLogo from "../assets/images/white_Logo.png";
import footerIconsConfig from "../configs/footerIcons";
const Footer = () => {
  return (
    <section className="black-bg py-5">
      <div className="container">
        <div className="row white-text">
          <div className="col-12 col-md-5 text-md-start text-center">
            <img src={whiteLogo} alt="whiteLogo" className="mb-4" />
            <p className="silver-text body-text-2">
              Copyright © 2020 Nexcent ltd. <br /> All rights reserved
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-2 mt-4 mb-3">
              {footerIconsConfig.map((data) => (
                <div className="footer-icons" key={data.alt}>
                  <img src={data.src} alt={data.alt} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-7 d-flex justify-content-between flex-wrap">
            <div>
              <h4 className="heading-4">Company</h4>
              <ul className="body-text-2">
                <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div>
              <h4 className="heading-4">Support</h4>
              <ul className="body-text-2">
                <li>Help center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy policy</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h4 className="heading-4">Stay up to date</h4>
              <div className="footer-input-container">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="footer-input"
                />
                <div className="input-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-send"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
