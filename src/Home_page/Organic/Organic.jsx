import organic from '../../assets/title-img.jpeg'
import step_1 from '../../assets/step-1.jpeg'
import step_2 from '../../assets/step-2.jpeg'
import step_3 from '../../assets/step-3.jpeg'
import './Organic.css'
const Organic = () => {
    return (
        <div className=''>
            <div className='mt-20'>
                <img className='w-[450px] relative mx-auto' src={organic} alt="organic-img" />
                <h1 className='text-center absolute text-4xl ml-[600px] -mt-[75px] font-jost '>and pure</h1>
                <h1 className='text-center absolute text-4xl ml-[600px] -mt-[50px] font-jost'>products</h1>
            </div>
            <div className='mt-20 grid font-montserrat grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='container'>
                    <img className='mx-auto mb-2 ' src={step_1} alt="" />
                    <h1 className='font-bold text-center mt-2 text-2xl mb-2'>Planning</h1>
                    <p className='text-center'>Consider how some search engines autocorrect for spen.</p>
                </div>
                <div className='container'>
                    <img className='mx-auto mb-2 ' src={step_2} alt="" />
                    <h1 className='font-bold text-center mt-2 text-2xl mb-2'>Seeding</h1>
                    <p className='text-center'>Consider how some search engines autocorrect for spen.</p>
                </div>
                <div className='container'>
                    <img className='mx-auto mb-2 ' src={step_3} alt="" />
                    <h1 className='font-bold text-center mt-2 text-2xl mb-2'>Quality Assure</h1>
                    <p className='text-center'>Consider how some search engines autocorrect for spen.</p>
                </div>
                <div className='container'>
                    <img className='mx-auto mb-2 ' src={step_1} alt="" />
                    <h1 className='font-bold text-center mt-2 text-2xl mb-2'>Marketing</h1>
                    <p className='text-center'>Consider how some search engines autocorrect for spen.</p>
                </div>
            </div>
        </div>
    );
};

export default Organic;