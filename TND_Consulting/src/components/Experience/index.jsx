import {useContext, useState} from 'react';
import {AppContext} from '../../Helper/context';
import uuid4 from 'uuid4';
import './style.scss';


const Experience = () => {

    const [slideIndex, setSlideIndex] = useState(1);

    const {experiences} = useContext(AppContext);

    const nextSlide = () => {
        if(slideIndex !==experiences.length) {
            setSlideIndex(slideIndex + 1);
        }else if (slideIndex === experiences.length) {
            setSlideIndex(1)
        }
        console.log("clic happens")
    };

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex -1)
        } else if (slideIndex === 1) {
            setSlideIndex(experiences.length)
        }
        console.log("clic happens")
    };

    const moveDot = index => {
        setSlideIndex(index)
    }

  return (
    <div className="pageContainer">

    <div className="slider">

    {experiences.map((exp) => {
        return (
            <div key={uuid4()} className={slideIndex === (experiences.indexOf(exp) +1) ? "slider_experience slider_experience--active" : "slider_experience"}>
                <div className="slider_experience_info">
                    <h2 className="slider_experience_info_title">Period</h2>
                    <p className="slider_experience_info_content">{exp.period}</p>
                </div>
                <div className="slider_experience_info">
                    <h2 className="slider_experience_info_title">Role</h2>
                    <p className="slider_experience_info_content">{exp.role}</p>
                </div>
                <div className="slider_experience_info">
                    <h2 className="slider_experience_info_title">Contract</h2>
                    <p className="slider_experience_info_content">{exp.contract}</p>                
                </div>
                <div className="slider_experience_info">
                    <h2 className="slider_experience_info_title">With</h2>
                    <p className="slider_experience_info_content">{exp.with}</p>
                </div>
                <div className="slider_experience_info">
                    <h2 className="slider_experience_info_title">Domain</h2>
                    <p className="slider_experience_info_content">{exp.domain}</p>
                </div>
                <div className="slider_experience_info">
                    <h2 className="slider_experience_info_title">Countries</h2>
                    <p className="slider_experience_info_content">{exp.countries}</p>
                </div>
                <div className="slider_experience_info">
                    <h2 className="slider_experience_info_title">For</h2>
                    <p className="slider_experience_info_content">{exp.for}</p>
                </div>
            </div>
        )
    })}
    </div>

            <div className="slider_buttons">
                <button className="button" onClick={prevSlide}>Previous</button>
                <button className="button" onClick={nextSlide}>Next</button>
            </div>
            <div className="slider_dots">
                {Array.from({length: experiences.length}).map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => moveDot(index)}
                            className={slideIndex === index +1 ? "dot dot--active" : "dot"}>
                            </div>
                    )
                })}
            </div>
    </div>
  )
}

export default Experience