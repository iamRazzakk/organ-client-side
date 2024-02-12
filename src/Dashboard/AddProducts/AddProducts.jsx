import { ToastContainer, toast } from "react-toastify";
import useAxiosPublic from "../../Components/Hook/axiosPublic";


const AddProducts = () => {
    const axiosPublic = useAxiosPublic()
    const notify = () => toast("Successfully added");
    const IMG_API_KEY = '95e0e6f1790d5b0a2184be49e4a99407'
    const handleSubmitProudct = async (e) => {
        e.preventDefault()
        const form = e.target;
        const Title = form.Title.value;
        const Price = form.price.value;
        const product = form.product.value;
        const description = form.description.value;
        const Rating = form.ration.value;
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        // console.log(Title, Price, Rating, formData);
        try {
            const { data } = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${IMG_API_KEY}`, formData);
            const ProductDetails = {
                Title: Title,
                Price: Price,
                Rating: Rating,
                product: product,
                description: description,
                image: data.data.url,
            };
            axiosPublic.post("/products", ProductDetails)
                .then(res => {
                    console.log(res.data);
                    if (res.data.acknowledged) {
                        notify();
                    }
                });
        }
        catch (error) {
            console.error('Error uploading image:', error);
        }
    }
    return (
        <div className="font-jost mt-5">
            <h1 className="text-center text-5xl font-bold">Add Product</h1>
            <form onSubmit={handleSubmitProudct} className="px-10">
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
                        <label className="text-black dark:text-black" htmlFor="emailAddress">Price</label>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-white bg-[#699c47] border border-gray-200 rounded-md dark:bg-[#699c47] dark:text-white dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-black dark:text-black" htmlFor="password">Rating</label>
                        <input
                            id="rating"
                            name="ration"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-black bg-[#699c47] border border-gray-200 rounded-md dark:bg-#bg-[#699c47] dark:text-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                    <div className="form-control py-6">
                        <label>Choose a Product:</label>
                        <select className="block w-full px-4 py-2 mt-2 text-white bg-[#699c47] border border-gray-200 rounded-md dark:bg-[#699c47] [#699c47]:text-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="product" id="cars">
                            <option value="Fruitandvegetables">Fruit & Vegetables</option>
                            <option value="Freshfruits" selected>Fresh Fruits</option>
                            <option value="Biscuitsandsnacks" selected>Biscuits & Snacks</option>
                            <option value="Organicfood" selected>Organic Food</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-black dark:text-black" htmlFor="passwordConfirmation">Img Confirmation</label>
                        <input
                            type="file" name="image" className="block w-full px-4 py-2 mt-2 text-white bg-[#699c47] border border-gray-200 rounded-md dark:bg-[#699c47] [#699c47]:text-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-black dark:text-black">Description</span>
                        </label>
                        <textarea className="block w-full px-4 py-2 mt-2 text-white bg-[#699c47] border border-gray-200 rounded-md dark:bg-[#699c47] [#699c47]:text-white focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
                        {/* <input type="text" name="description" placeholder="Description" className="input input-bordered md:w-full bg-white text-black md:py-10" required /> */}
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

export default AddProducts;