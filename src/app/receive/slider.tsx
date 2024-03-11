"use client"
import {useState} from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
const BlurImage = ({className=""}: {className?:string})=>{
    const [isBlurred, setIsBlurred] = useState(true);

    const handleImageClick = () => {
        setIsBlurred(!isBlurred);
    };

    return (
        <div  onClick={handleImageClick} className={`h-[150px] w-[150px] relative ${isBlurred ? 'blur-[1px]' : ''} ${className}`}>
            <Image src="/qr-code.png" alt="Qr code"
                   // height={150} width={150}
                style={{scale:"crop", objectFit:"fill"}} fill
                className="w-full h-auto cursor-pointer"
            />
            {/*{isBlurred && (*/}
            {/*    <div*/}
            {/*        onClick={handleImageClick}*/}
            {/**/}
            {/*        className="absolute inset-0 backdrop-blur-sm bg-white/30"></div>*/}
            {/*)}*/}
        </div>
    );
}

const ItemContainer = ()=>{
    return (

        <div className="text-center mx-auto  w-72 bg-white/70 rounded-2.5xl py-6 px-7">
            <BlurImage className="mx-auto"/>
            <div className="text-xs text-off-white-800 mt-4">Your addres TON</div>
            <div className="text-msm tracking-wider mt-1.5">UQALn3zh0ijXZ7cRKiBO-kv54s3IZjXjJ7CMIH1oOsSGHMFP</div>
        </div>
    )
}

const Slider = () => {
    return (

        <Swiper
            spaceBetween={15}
            slidesPerView={"auto"}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            centeredSlides={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {[1,2,3].map(e=>(
                <SwiperSlide style={{width: "288px"}} key={e}><ItemContainer/></SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider;