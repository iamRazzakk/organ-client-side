import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/axiosPublic";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader";


const Blogs = () => {

    const axiosPublic = useAxiosPublic()
    const { data: blogs = [], isPending, error } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/blogs');
            return res.data;
        },
    });

    if (isPending) return <Loader></Loader>;

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:p-6 lg:grid-cols-4 gap-4">
            {
                blogs?.map(blog => (
                    <div key={blog.id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={blog.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex justify-between">
                                <h2 className="">{blog.time}</h2>
                                <h2 className="">{blog.name}</h2>
                            </div>
                            <h2 className="card-title">{blog.Title}</h2>
                            <Link to={`${blog._id}`}>
                                <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#699c47] rounded hover:bg-white group mt-4">
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black">Show Details</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Blogs;