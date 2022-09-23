import React from 'react';
import '../style.scss';
import { Icon } from 'semantic-ui-react';

const SliderButton = ({direction, moveSlide}) => {

  return (
    <div>
        <button
            className="button"
            onClick={console.log("click happens")}>
            {/* <Icon
                name={
                    direction === "next" ? 
                    "arrow alternate circle right" : 
                    "arrow alternate circle left"} /> */}
                    Click
        </button>
    </div>
  )
}



export default SliderButton