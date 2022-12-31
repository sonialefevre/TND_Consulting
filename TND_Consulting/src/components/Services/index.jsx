import { useContext, useState } from "react";
import { AppContext } from "../../Helper/context";
import "./style.scss";

const Services = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const { services } = useContext(AppContext);

  const nextSlide = () => {
    if (slideIndex !== services.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === services.length) {
      setSlideIndex(1);
    }
    console.log("clic happens");
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(services.length);
    }
    console.log("clic happens");
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="pageContainerServices">
      <div className="slider">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className={
                slideIndex === service.id
                  ? "slider_slide slider_slide--active"
                  : "slider_slide"
              }
            >
              <h1 className="slider_slide--title">{service.title}</h1>
              <p className="slider_slide--content">{service.subtitle}</p>
            </div>
          );
        })}
        <div className="slider_buttons">
          <button className="button" onClick={prevSlide}>
            Previous
          </button>
          <button className="button" onClick={nextSlide}>
            Next
          </button>
        </div>

        <div className="slider_dots">
          {Array.from({ length: services.length }).map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => moveDot(index)}
                className={slideIndex === index + 1 ? "dot dot--active" : "dot"}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
