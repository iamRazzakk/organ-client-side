import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slider1 from '../../../src/assets/slider-01.jpeg'
import slider2 from '../../../src/assets/slider-02.jpeg'
import slider3 from '../../../src/assets/slider-03.jpeg'

const Header = () => {
    return (
        <div>
            <div className='flex'>

                <div className='flex-1 p-6'>
                    <h1 className='font-bold text-xl md:text-7xl pl-6 mt-20 md:mt-20 md:pl-20 w-full text-black '>Pure Organic Food Shop</h1>
                    <p className='md:pl-20 pl-6 mt-20 text-black text-xl mb-10'>Organic foods include fresh produce, meats, and dairy products as well as processed foods such as fruits frozen meals.</p>
                    <Link to='about'>
                        <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#699c47] rounded hover:bg-white group mt-4 ml-6 md:ml-20">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-black">Shop now</span>
                        </button>
                    </Link>
                    
                    <Link to='video'>
                        <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-medium text-black transition-all duration-300 ease-in-out bg-white rounded hover:bg-white group mt-4 ml-6 md:ml-20">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#699c47] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-ou group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Watch our video</span>
                        </button>
                    </Link>
                </div>
                <div className='flex-1 p-6 bg-[#699c47] relative'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={slider1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider3} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div >
            <div className='bg-white relative ml-[650px] -mt-11 text-black '>
                <h1 className='text-5xl font-bold font-rzak'>80k</h1>
                <p className='font-rzak'>Metric ton product <br /> supplied</p>
            </div>
        </div>
    );
};

export default Header;
