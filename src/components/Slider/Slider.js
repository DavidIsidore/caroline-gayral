import React from 'react'
import ImageSlider, { Slide } from 'react-auto-image-slider'

import veste from '../../assets/imgCaroussel/Photo-veste-beige.jpg'
import cabinet from '../../assets/imgCaroussel/cabinet-1-150x150.jpg'
import portrait from '../../assets/imgCaroussel/portrait.jpg'
import seance from '../../assets/imgCaroussel/seance-150x150.jpg'

export default function Slider() {
    return (
        <ImageSlider effectDelay={500} autoPlayDelay={2000}>
            <Slide>
                <img src={veste} alt="ptoho avec veste" />
            </Slide>
            <Slide>
                <img src={cabinet} alt="photo du cabinet" />
            </Slide>
            <Slide>
                <img src={portrait} alt="portrait" />
            </Slide>
            <Slide>
                <img src={seance} alt="seance" />
            </Slide>
        </ImageSlider>
    )
}
