import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Components/Hook/axiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Shared/Loader";
import Rating from "react-rating";


const ProductsDetails = () => {
    const { id } = useParams()
    const axiosPublic = useAxiosPublic()
    const { data: products = [], isPending, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products');
            return res.data;
        },
    });
    if (isPending) return <Loader></Loader>;
    if (error) return 'An error has occurred: ' + error.message
    const product = products.find(prodct => prodct._id === id);
    return (
        <div>
            <div>
                {product ? (
                    <div className="md:mt-10 space-y-6 max-h-screen">
                        <div className="md:flex p-4">
                            <div className="flex-1"><img className="w-1/2" src={product?.image} alt="" /></div>
                            <div className="flex-1">
                                <h1 className="text-4xl font-bold font-Bricolage">{product?.Title}</h1>
                                <h1 className="text-xl font-Bricolage">{product?.description}</h1>
                                <Rating initialRating={product?.Rating} />
                                <p className="text-xl font-Lato font-bold">Price: ${product?.Price}</p>
                                <button type="submit" className="relative mt-4 inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded group">
                                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#699c47] opacity-[3%]"></span>
                                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#699c47] opacity-100 group-hover:-translate-x-8"></span>
                                    <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">Add to Cart</span>
                                    <span className="absolute inset-0 border-2 border-[#699c47] rounded"></span>
                                </button>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div>Blog not found</div>
                )}
            </div>
        </div>
    );
};

export default ProductsDetails;