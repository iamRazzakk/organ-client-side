
import { useParams } from "react-router-dom";
import useAxiosPublic from "../Hook/axiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Shared/Loader";


const BlogDetails = () => {
    const { id } = useParams()
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
    const blog = blogs.find(blog => blog._id === id);

    return (
        <div>
            {blog ? (
                <div className="md:mt-10 space-y-6">
                    <h1 className="text-4xl font-bold font-Bricolage">{blog?.name}</h1>
                    <p className="text-xl font-Lato">{blog?.Description}</p>
                    <img className="w-1/2" src={blog?.image} alt="" />
                </div>
            ) : (
                <div>Blog not found</div>
            )}
        </div>
    );
};

export default BlogDetails;