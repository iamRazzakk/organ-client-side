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
        </div>
    );
};

export default Home;