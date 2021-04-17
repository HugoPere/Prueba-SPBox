import React, { useState } from 'react';
import {sliderData} from './sliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const Slider = ({slides}) =>{
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
      };
      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
      };
      if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
      }

    return(
        <section className="slider box">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {sliderData.map((slide, index) =>{
                return (
                    <div className={index === currentSlide ? 'slide active' : 'slide'} key={index}>
                        {index === currentSlide && (
                        <a href={slide.url}>
                            <img src={slide.image} alt="test" className="image"/>
                        </a>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default Slider