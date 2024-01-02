import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Property = () => {
    return (
        <div className='mt-20'>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-rzak text-4xl font-bold">Property For Rent:~</h1>
                    <p>From as low as $10 per day with limited time offer discount</p>
                </div>
                <div>
                    <button>
                        dsfaasFF
                    </button>
                    <button>
                        asdfa
                    </button>
                </div>
            </div>
            {/* carusel */}
            <div className='mt-6'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='w-[750px] object-cover h-[250px]' src="https://img.freepik.com/premium-photo/high-grey-house-large-family-with-grey-modern-house-exterior_124507-22190.jpg" alt='Img' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[750px] object-cover h-[250px]' src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img2' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[750px] object-cover h-[250px]' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img2' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[750px] object-cover h-[250px]' src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img2' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[750px] object-cover h-[250px]' src="https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img2' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[750px] object-cover h-[250px]' src="https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img2' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[750px] object-cover h-[250px]' src="https://images.pexels.com/photos/4469176/pexels-photo-4469176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img2' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Property;