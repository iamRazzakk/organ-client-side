import img from '../../assets/why-choose-big.jpeg'
import img1 from '../../assets/1.jpeg'
import img2 from '../../assets/2.jpeg'
import img3 from '../../assets/3.jpeg'
import img4 from '../../assets/4.jpeg'
import img5 from '../../assets/5.jpeg'
import img6 from '../../assets/6.jpeg'
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
const WhyChoseUs = () => {
    const countValue = 89;
    const countValue1 = 80;
    const countValue2 = 40;
    const countValue3 = 25;
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className='font-jost bg-[#f7f5f2] w-full'>
            <div className="text-center font-jost">
                <h1 className='font-jost text-xl text-[#699c47] mb-2'>Why Choose Us</h1>
                <h1 className="text-5xl font-bold">6 reasons to Choose us</h1>
            </div>
            <div className='md:flex'>
                <div className='flex-1 mt-10 p-10'>
                    <div className='flex w-[272] text-right h-[87px] p-6'>
                        <div data-aos="fade-right" className='mr-6'>
                            <h1 className='font-bold mb-2'>100% Organic</h1>
                            <h3>We show that the seemingly simple <br /> process of text realization</h3>
                        </div>
                        <div data-aos="fade-left">
                            <img className='w-[42px] h-[39px]' src={img1} alt="" />
                        </div>
                    </div>
                    <div className='flex w-[272] mt-6 text-right h-[87px] p-6'>
                        <div data-aos="fade-right" className='mr-6 '>
                            <h1 className='font-bold mb-2'>Neat & Clean</h1>
                            <h3>We show that the seemingly <br /> simple process of text realization</h3>
                        </div>
                        <div data-aos="fade-left">
                            <img className='w-[42px] h-[39px]' src={img2} alt="" />
                        </div>
                    </div>
                    <div className='flex w-[272] mt-6 text-right h-[87px] p-6'>
                        <div data-aos="fade-right" className='mr-6 '>
                            <h1 className='font-bold mb-2'>No Preservation</h1>
                            <h3>We show that the seemingly simple <br /> process of text realization</h3>
                        </div>
                        <div data-aos="fade-left">
                            <img className='w-[42px] h-[39px]' src={img3} alt="" />
                        </div>
                    </div>
                </div>
                <div data-aos="flip-right" className='flex-1 mt-10'>
                    <img className='' src={img} alt="" />
                </div>
                {/* right side */}
                <div className='flex-1 mt-10  p-10'>
                    <div className='flex w-[272] text-left h-[87px] p-6'>
                        <div data-aos="fade-right">
                            <img className='w-[42px] h-[39px]' src={img4} alt="" />
                        </div>
                        <div data-aos="fade-left" className='ml-6'>
                            <h1 className='font-bold mb-2'>Export Quality</h1>
                            <h3>We show that the seemingly simple <br /> process of text realization</h3>
                        </div>
                    </div>
                    <div className='flex w-[272] mt-6 text-left h-[87px] p-6'>
                        <div data-aos="fade-right">
                            <img className='w-[42px] h-[39px]' src={img5} alt="" />
                        </div>
                        <div data-aos="fade-left" className='ml-6 '>
                            <h1 className='font-bold mb-2'>Trendy Design</h1>
                            <h3>We show that the seemingly <br /> simple process of text realization</h3>
                        </div>
                    </div>
                    <div className='flex w-[272] mt-6 text-left h-[87px] p-6'>
                        <div data-aos="fade-right">
                            <img className='w-[42px] h-[39px]' src={img6} alt="" />
                        </div>
                        <div data-aos="fade-left" className='ml-6 '>
                            <h1 className='font-bold mb-2'>Fast Delivery</h1>
                            <h3>We show that the seemingly simple <br /> process of text realization</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#699c47] h-[289px] w-[1116px] mx-auto'>
                <div className='flex text-center p-24 text-white'>
                    <div className="flex-1 rounded-lg  flex justify-around items-center bg-cover bg-center">
                        <div className=''>
                            <CountUp className='text-5xl font-bold' end={countValue} duration={3} separator="," suffix="k" />
                            <h2 className='text-xl font-bold'>Organic Products</h2>
                        </div>
                    </div>

                    {/*  */}

                    {/*  */}
                    <div className="flex-1 rounded-lg  flex justify-around items-center bg-cover bg-center">
                        <div className=''>
                            <CountUp className='text-5xl font-bold' end={countValue1} duration={3} separator="," suffix="k" />
                            <h2 className='text-xl font-bold'>Metric to supplied</h2>
                        </div>
                    </div>
                    <div className="flex-1 rounded-lg  flex justify-around items-center bg-cover bg-center">
                        <div className=''>
                            <CountUp className='text-5xl font-bold' end={countValue2} duration={3} separator="," suffix="k" />
                            <h2 className='text-xl font-bold'>Experienced Farmer</h2>
                        </div>
                    </div>
                    <div className="flex-1 rounded-lg  flex justify-around items-center bg-cover bg-center">
                        <div className=''>
                            <CountUp className='text-5xl font-bold' end={countValue3} duration={3} separator="," suffix="k" />
                            <h2 className='text-xl font-bold'>Organic Awards</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoseUs;