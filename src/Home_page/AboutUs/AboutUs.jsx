import aboutUS from '../../assets/about-icon.jpeg'
// import img1 from '../../assets/about-img-1.jpeg'
// import img2 from '../../assets/about-img-2.jpeg'
// import img3 from '../../assets/aboutimg-1.jpeg'

const AboutUs = () => {
    return (
        <div className="flex mt-20">
            <div className="flex-1 p-10 font-jost">
                <h1 className='font-jost text-xl text-[#699c47] mb-2'>About Us</h1>
                <h2 className="text-5xl p-4 mb-2 font-jost font-bold">
                    We believe in pure and organic quality
                </h2>
                <p>We had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level.</p>
                <div className='flex mt-2'>
                    <div>
                        <img src={aboutUS} alt="" />
                    </div>
                    <div className='ml-6'>
                        <h2 className='text-xl font-bold'>100% Healthy Quality</h2>
                        <p>The stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level.</p>
                    </div>
                </div>
                <button className="mt-4 ml-4 px-10  btn relative overflow-hidden text-white border-[#699c47] bg-[#699c47] rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-[#699c47] hover:border-[#699c47]">
                    <span className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-25 transition duration-300 ease-in-out"></span>
                    About Us
                </button>

            </div>
            {/* <div className="flex-1">
                <div className='w-[330px] relative rounded-tl-lg  rounded-br-2xl h-[204px] bg-[#699c47] text-white'>
                    <h1 className=' font-jost p-10 italic text-2xl'>"Organic foods are very helpful to our human body"</h1>
                    <p className='ml-40'>-------Daniel Nirob</p>
                </div>
                <div className='absolute'>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <div>
                    <img className='relative -mt-[525px] ml-44' src={img3} alt="" />
                </div>
                <div className='absolute -mt-[600px] ml-[250px]'>
                    <img src={img2} alt="" />
                </div>
                </div>
            </div> */}
        </div>
    );
};
export default AboutUs;