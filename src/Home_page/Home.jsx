import Blogs from "../Components/Blogs/Blogs";
import AboutUs from "./AboutUs/Contact";
import Header from "./Header/Header";
import Organic from "./Organic/Organic";
import Products from "./Products/Products";
import WhyChoseUs from "./WhyChoseUs/WhyChoseUs";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Organic></Organic>
            <AboutUs></AboutUs>
            <Products></Products>
            <WhyChoseUs></WhyChoseUs>
            <div className="md:mt-32">
                <div className="text-center">
                    <h3 className="font-bold text-[#699C47]">News Insight</h3>
                    <h1 className="text-5xl font-bold">News From Orgado</h1>
                </div>
                <Blogs></Blogs>
            </div>
        </div>
    );
};

export default Home;