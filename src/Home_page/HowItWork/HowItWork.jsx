import img from '../../../src/assets/booking.png'
import img2 from '../../../src/assets/dollar.png'
import img3 from '../../../src/assets/updated.png'

const HowItWork = () => {
    return (
        <div className="mt-10 font-rzak">
            <h1 className="font-rzak text-4xl font-bold text-center underline">How it Work</h1>
            <div className="w-2/3 text-xl mx-auto">
                <p className="">Explore the seamless process of booking and relaxing, coupled with exclusive deals through SaveMore. Elevate your experience with us – your ultimate destination for serenity and savings.</p>
            </div>
            <div className="flex gap-4  mt-10">
                <div className="flex justify-center item-center gap-6 shadow-2xl rounded-lg p-8">
                    <div className='w-20 h-10'>
                        <img className=' object-cover' src={img} alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>
                            Book & relax
                        </h1>
                        <p>
                            Your Haven for Tranquil Escapes, Offering a World of Serenity and Comfort.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center item-center gap-6  shadow-2xl rounded-lg p-8'>
                        <div className='w-20 h-10 flex items-center justify-center'>
                            <img className=' object-cover' src={img2} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>
                                Save More
                            </h1>
                            <p>
                                Unlock Exclusive Deals and Discounts – Your Gateway to Smart Savings Every Day!
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center item-center gap-6 shadow-2xl rounded-lg p-8'>
                        <div className='w-20 h-10'>
                            <img className=' object-cover' src={img3} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>
                                Book & relax
                            </h1>
                            <p>
                                Your Haven for Tranquil Escapes, Offering a World of Serenity and Comfort.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;