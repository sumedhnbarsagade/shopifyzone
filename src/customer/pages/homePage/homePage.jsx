import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSeactionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';


const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div className='py-20 space-y-10 flex-col justify-center px-5 lg:px-10'>
                <HomeSeactionCarousel/>
                <HomeSeactionCarousel/>
                <HomeSeactionCarousel/>
                <HomeSeactionCarousel/>
                <HomeSeactionCarousel/>
            </div>
        </div>
    )
}

export default HomePage