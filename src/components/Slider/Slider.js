import React from 'react'
import ImageSlider, { Slide } from 'react-auto-image-slider'

import veste from '../../assets/imgCaroussel/Photo-veste-beige.jpg'
import cabinet from '../../assets/imgCaroussel/cabinet-1-150x150.jpg'
import portrait from '../../assets/imgCaroussel/portrait.jpg'
import seance from '../../assets/imgCaroussel/seance-150x150.jpg'

import './slider.scss'

export default function Slider() {
    return (
        <ImageSlider effectDelay={1000} autoPlayDelay={3000} classname="slider">
            <Slide className="slide">
                <img
                    src={veste}
                    alt="ptoho avec veste"
                    className="slider_img"
                />
            </Slide>
            <Slide>
                <img src={cabinet} alt="cabinet" className="slider_img" />
            </Slide>
            <Slide>
                <img src={portrait} alt="portrait" className="slider_img" />
            </Slide>
            <Slide>
                <img src={seance} alt="seance" className="slider_img" />
            </Slide>
        </ImageSlider>
    )
}
