import React from 'react'
//import ImageSlider, { Slide } from 'react-auto-image-slider'
import { Carousel } from 'react-carousel-minimal'

import veste from '../../assets/imgCaroussel/Photo-veste-beige.jpg'
import cabinet from '../../assets/imgCaroussel/cabinet-1-150x150.jpg'
import portrait from '../../assets/imgCaroussel/portrait.jpg'
import seance from '../../assets/imgCaroussel/seance-150x150.jpg'

import './slider.scss'

export default function Slider() {
    const images = [
        {
            image: '../../assets/imgCaroussel/Photo-veste-beige.jpg',
            caption: '',
        },
        {
            image: '../../assets/imgCaroussel/cabinet-1-150x150.jpg',
            caption: '',
        },
        { image: '../../assets/imgCaroussel/portrait.jpg', caption: '' },
        { image: '../../assets/imgCaroussel/seance-150x150.jpg', caption: '' },
    ]

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <Carousel
            data={images}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
                textAlign: 'center',
                maxWidth: '850px',
                maxHeight: '500px',
                margin: '40px auto',
            }}
        />
    )
}
