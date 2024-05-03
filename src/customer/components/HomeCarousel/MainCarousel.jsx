import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCaroselData';

const MainCarousel = () => {
    const items = MainCarouselData.map((item)=> <img className='cursor-pinter' 
    role='presentation' src={item.image} alt=''/>)
    
    return (
    <AliceCarousel
        items={items}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    )
};

export default MainCarousel;