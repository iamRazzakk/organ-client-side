import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/Hook/axiosPublic";
import Loader from "../../Components/Shared/Loader";
import Rating from "react-rating";
import { BsCart4 } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; './Organic.css'
import "./Products.css"
const Products = () => {
    const axiosPublic = useAxiosPublic()
    const [activeTab, setActiveTab] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const { data: ProductsData = [], isPending, error } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products');
            return res.data;
        },
    });

    useEffect(() => {
        if (activeTab === "Biscuitsandsnacks") {
            setFilteredData(ProductsData.filter(product => product.product === "Biscuitsandsnacks"));
        } else if (activeTab === "Fruitandvegetables") {
            setFilteredData(ProductsData.filter(product => product.product === "Fruitandvegetables"));
        } else if (activeTab === "Freshfruits") {
            setFilteredData(ProductsData.filter(product => product.product === "Freshfruits"));
        } else if (activeTab === "Organicfood") {
            setFilteredData(ProductsData.filter(product => product.product === "Organicfood"));
        } else {
            setFilteredData(ProductsData);
        }
    }, [activeTab, ProductsData]);

    if (isPending) return <Loader></Loader>

    if (error) return 'An error has occurred: ' + error.message
    // console.log(ProductsData);

    return (
        <div className="max-h-screen md:mb-32 font-jost">
            <div className="flex justify-between">
                <div className="flex-1">
                    <h1 className="font-bold text-[#699C47]">Organic Products</h1>
                    <h1 className="text-5xl font-bold">Featured Product</h1>
                </div>
                <div className="flex-1">
                    <div role="tablist" className="flex overflow-auto justify-end tabs tabs-lifted">
                        <a onClick={() => handleTabClick("Biscuitsandsnacks")} role="tab" className={`tab ${activeTab === 'Biscuitsandsnacks' ? 'active [--tab-bg:black] [--tab-border-color:black] text-[#699C47] text-xl font-bold hover:underline' : ''}`}>Biscuit Sand Snacks</a>
                        <a onClick={() => handleTabClick("Fruitandvegetables")} role="tab" className={`tab ${activeTab === 'Fruitandvegetables' ? 'active [--tab-bg:black] [--tab-border-color:black] text-[#699C47] text-xl font-bold hover:underline' : ''}`}>Fruit and Vegetables</a>
                        <a onClick={() => handleTabClick("Freshfruits")} role="tab" className={`tab ${activeTab === 'Freshfruits' ? 'active [--tab-bg:black] [--tab-border-color:black] text-[#699C47] text-xl font-bold hover:underline' : ''}`}>Fresh fruits</a>
                        <a onClick={() => handleTabClick("Organicfood")} role="tab" className={`tab ${activeTab === 'Organicfood' ? 'active [--tab-bg:black] [--tab-border-color:black] text-[#699C47] text-xl font-bold hover:underline' : ''}`}>Organic food</a>
                    </div>
                </div>
            </div>

            {filteredData.length === 0 && (
                <div className="text-center text-5xl md:mb-32 font-bold mt-4 text-[#699C47]">No Product Available</div>
            )}

            <div className="grid md:mt-16 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredData.map(products => (
                    <div data-aos="zoom-in" className="container shadow-xl rounded-lg" key={products._id}>
                        <img className="h-32 object-cover w-full" src={products?.image} alt="" />
                        <h1 className="text-center text-xl font-bold">{products?.Title}</h1>
                        <div className="flex justify-evenly">
                            <p className="">{products?.Price}</p>
                            <Rating className="text-[#699C47]" initialRating={products?.Rating} />
                        </div>
                        <div className="flex justify-evenly mt-8 mb-8">
                            <Link to={'cart'}>
                                <BsCart4 className="text-2xl icon"></BsCart4>
                            </Link>
                            <Link to={`products/${products._id}`}>
                                <FaRegEye className="text-2xl icon"></FaRegEye>
                            </Link>
                            <BsBookmarkHeartFill className="text-2xl icon"></BsBookmarkHeartFill>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;