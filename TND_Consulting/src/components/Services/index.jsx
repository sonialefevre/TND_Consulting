import React, { useState } from 'react';
import './style.scss';
import SliderButton from './SliderButton';



    //TODO useParams to display page name 

const Services = ({services}) => {

    const [slideIndex, setSlideIndex] = useState(1);


    const nextSlide = () => {
        if(slideIndex !== services.length){
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === services.length){
            setSlideIndex(1)
        }
    };

    const prevSlide = () => {
        if(slideIndex !== services.length){
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1){
            setSlideIndex(services.length)
        }
    };

  return (
      <div className="mainContainer">
    <div className="services">
        {services.map((service, index) => {
            return (
                <div
                    key={service.id}
                    className={slideIndex === index + 1 ?
                            "services_active" : 
                            "services_slide"}>
                    <h1>{service.title}</h1>
                    <p>{service.subtitle}</p>
                </div>
            )
        })}
    
    </div>
    <div className="services_buttons">
            <SliderButton moveSlide={prevSlide} direction="prev"/>
            <SliderButton moveSlide={nextSlide} direction="next"/>
        </div>
        </div>
  )
}

export default Services