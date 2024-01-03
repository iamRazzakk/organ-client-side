import { FaPhone } from "react-icons/fa6";
import {  MdLocationCity, MdOutlineMail } from "react-icons/md";


const About = () => {
    return (
        <div className="font-jost">
            <div className="mt-4">
                <img className="w-[95%] rounded-lg h-80 object-cover m-auto" src="https://cdn.create.vista.com/api/media/small/266368826/stock-photo-finishing-up-a-meeting-handshake-of-two-happy-business-people-a" alt="about img" />
            </div>
            <div className="flex items-center">
                <div className="flex-1 p-4">
                    <h1 className="text-4xl text-center font-bold">Contact Details</h1>
                    <div className="ml-6 mt-6">
                        <h3 className="text-xl">Client Support: </h3>
                        <div className="flex items-center gap-2">
                            <FaPhone></FaPhone>
                            <h1>+8801878265664</h1>
                        </div>
                        <div className="divider text-black"></div>
                    </div>
                    <div className="ml-6">
                        <h3 className="text-xl">E-mail:</h3>
                        <div className="flex items-center gap-2">
                            <MdOutlineMail></MdOutlineMail>
                            <h1>rakibt23p@gmail.com</h1>
                        </div>
                        <div className="divider text-black"></div>
                    </div>
                    <div className="ml-6">
                        <h3 className="text-xl">Main Office:</h3>
                        <div className="flex items-center gap-2">
                            <MdLocationCity></MdLocationCity>
                            <h1>77/B Opera House Hall, North Streeth, USA -12556.</h1>
                        </div>
                        <div className="divider text-black"></div>
                    </div>
                </div>
                <div className="flex-1 p-4">
                    <form className="flex-1 font-jost p-20 md:p-5">
                        <p className="text-lg font-semibold">Name:</p>
                        <input className="w-[80%] px-4 py-2 rounded-lg bg-gray-700 mb-3 text-white" type="text" name="user_name" id="" placeholder="Enter name" /> <br />
                        <p className="text-lg font-semibold">Email address:</p>
                        <input className="w-[80%] px-4 py-2 rounded-lg bg-gray-700 mb-3 text-white" type="text" name="user_email" id="" placeholder="Enter Email" /> <br />
                        <p className="text-lg font-semibold">Message:</p>
                        <textarea className="w-[80%] px-4 py-2 rounded-lg bg-gray-700 mb-3 text-white" type="text" name="message" id="" placeholder="Message" /><br />
                        <input className='bg-gray-700 rounded cursor-pointer font-jost px-2 py-2 text-white' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default About;