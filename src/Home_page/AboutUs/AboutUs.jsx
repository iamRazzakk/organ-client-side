import aboutUS from '../../assets/about-icon.jpeg'
const AboutUs = () => {
    return (
        <div className="flex mt-20">
            <div className="flex-1 p-10">
                <h1 className='font-rzak text-xl text-[#699c47] mb-2'>About Us</h1>
                <h2 className="text-5xl p-4 mb-2 font-jost font-bold">
                    We believe in pure and organic quality
                </h2>
                <p>We had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level.</p>
                <div className='flex'>
                    <div>
                        <img src={aboutUS} alt="" />
                    </div>
                    <div className='ml-6'>
                        <h2 className='text-xl font-rzak'>100% Healthy Quality</h2>
                        <p>The stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level.</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">

            </div>
        </div>
    );
};

export default AboutUs;