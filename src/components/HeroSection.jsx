import Carousel from "react-bootstrap/Carousel";
import heroImage from "../assets/images/Illustration.png";
import heroSectionConfig from "../configs/heroSection";

function HeroSection() {
  return (
    <Carousel controls={false}>
      {heroSectionConfig.map((data) => (
        <Carousel.Item key={data.id}>
          <section className="bg-silver">
            <div className="container px-3 py-5 px-md-5 mx-auto">
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-8 px-md-5">
                  <h1 className="heading-1">
                    {data.title}{" "}
                    <span className="primary-text">{data.span}</span>
                  </h1>
                  <p className="body-text-1 ve-gray mt-3">{data.desc}</p>
                  <div className="btn bg-green white-text px-4 py-2 ve-radius mt-3">
                    Register
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="hero-image">
                    <img src={data.src} alt="Hero Image" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroSection;
