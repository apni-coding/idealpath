import React from 'react'
import "./Home.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, } from 'react'
import banner1 from "../../Images/banner1.jpeg"
import banner2 from "../../Images/banner1.jpeg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Home() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className="banner">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{ prevEl: null, nextEl: null }}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide></SwiperSlide>
                <SwiperSlide><img src={banner1} alt="banner1" /></SwiperSlide>
                <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            <div className="bannerright">
                <div className="bannertoptxt">
                    {/* <p>Get</p> */}
                    <h2>Embark on the journey of your dreams, guided by the compass of purpose towards an ideal path.</h2>
                </div>
                <div className="bannermid">
                    <p>At Ideal Path, we're on a mission to gather valuable data on educational institutes, converting it into high-quality information for students. Simplifying the process of choosing coaching institutes and providing holistic insights for better educational choices.</p>
                </div>
                <div className="bannermidtxt">
                    <div className="astrologersplus">
                        <h1>250+</h1>
                        <p>Students Mentored</p>
                    </div>
                    <div className="todayusers">
                        <h1>10+</h1>
                        <p>Classromm Courses</p>
                    </div>
                    <div className="totalusers">
                        <h1>50+</h1>
                        <p>Facality</p>
                    </div>

                </div>
                <div className="bottombtn">
                    <button>Contact Us</button>
                </div>
            </div>
        </div>
    )
}
