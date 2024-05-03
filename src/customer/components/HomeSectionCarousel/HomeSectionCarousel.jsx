import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionProductCards from '../HomeSectionProductCards/HomeSectionProductCards';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from "@mui/material";
import { useState } from "react";
import { mensKurta } from "../../../Data/mensKurta";


const HomeSeactionCarousel = () => {
    const [activeIndex,setActiveIndex]=useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);

    const syncActiveIndex = ({item}) => setActiveIndex(item);

    const items = mensKurta.slice(0,10).map((item) => <HomeSectionProductCards product={item} />)
    return (
        <div className="border">
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    autoPlayInterval={1000}
                    infinite
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !==items.length-6 && <Button 
                variant="contained" 
                className="z-50 bg-white" 
                onClick={slideNext}
                sx={{
                    position: 'absolute', 
                    top: "8rem",
                    right: "0rem", 
                    tranform: "transalateX(50%) rotate(90deg)", 
                    bgcolor:"white"
                }} aria-label="next">
                    <KeyboardArrowLeftIcon 
                    sx={{ 
                        transform: "rotate(180deg)", 
                        color:"black" }} />
                </Button>}

                {activeIndex !== 0 &&<Button 
                onClick={slidePrev} 
                variant="contained" 
                className="z-50 bg-white" 
                sx={{
                    position: 'absolute', 
                    top: "8rem",
                    left: "0rem", 
                    tranform: "transalateX(-50%) rotate(-90deg)", 
                    bgcolor:"white"
                }} aria-label="next">
                    <KeyboardArrowLeftIcon 
                    sx={{ 
                        transform: "rotate(0deg)", 
                    color:"black" 
                    }} />
                </Button>
    }
            </div>
        </div>
    )
}

export default HomeSeactionCarousel;