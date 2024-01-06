import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/axiosPublic";


const Blogs = () => {
    const axiosPublic = useAxiosPublic()
    const { data: blogs = [], isPending, error } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/blogs');
            return res.data;
        },
    });

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    console.log(blogs);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                blogs?.map(blog => (
                    <div key={blog.id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={blog.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{blog.Title}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Blogs;