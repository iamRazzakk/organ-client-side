import { useContext } from "react";
import { AuthContext } from './../../Components/AuthProvider/AuthProvider';
import useAxiosPublic from "../../Components/Hook/axiosPublic";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const notify = () => toast("Successfully added");
    const IMG_API_KEY = '95e0e6f1790d5b0a2184be49e4a99407'
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const name = user?.displayName || 'undefined';
        const Title = form.Title.value || 'undefined';
        const Description = form.Description.value || 'undefined';
        const time = form.time.value || 'undefined';
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);

        try {
            const { data } = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${IMG_API_KEY}`, formData);
            const blogData = {
                name: name,
                Description: Description,
                Title: Title,
                time: time,
                image: data.data.url,
            };
            axiosPublic.post("/blogs", blogData)
                .then(res => {
                    console.log(res.data);
                    if (res.data.acknowledged) {
                        notify();
                    }
                });
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    return (
        <div className="font-jost mt-5">
            <h1 className="text-center text-5xl font-bold">Add Product</h1>
            <form onSubmit={handleSubmit} className="px-10">
                <div className=" mt-4">
                    <div>
                        <label className="text-black dark:text-black" htmlFor="username">Title</label>
                        <input
                            id="username"
                            type="text"
                            name="Title"
                            className=" w-full px-4 py-2 mt-2 text-white bg-[#699c47] border border-gray-200 rounded-md dark:bg-[#699c47] dark:text-white dark:bo-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-black dark:text-black" htmlFor="emailAddress">Description</label>
                        <input
                            id="Description"
                            name="Description"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-white bg-[#699c47] border border-gray-200 rounded-md dark:bg-[#699c47] dark:text-white dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-black dark:text-black" htmlFor="password">Date</label>
                        <input
                            id="password"
                            name="time"
                            type="date"
                            className="block w-full px-4 py-2 mt-2 text-black bg-[#699c47] border border-gray-200 rounded-md dark:bg-#bg-[#699c47] dark:text-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-black dark:text-black" htmlFor="passwordConfirmation">Img Confirmation</label>
                        <input
                            type="file" name="image" className="block w-full px-4 py-2 mt-2 text-white bg-[#699c47] border border-gray-200 rounded-md dark:bg-[#699c47] [#699c47]:text-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                </div>

                <div className=" justify-end mt-6">
                    <button type="submit" className="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group">
                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#699c47] opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#699c47] opacity-100 group-hover:-translate-x-8"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-gray-900">Save</span>
                        <span className="absolute inset-0 border-2 border-[#699c47] rounded-full"></span>
                    </button>
                    <ToastContainer />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;