import AboutUs from "./AboutUs/AboutUs";
import Header from "./Header/Header";
import HowItWork from "./HowItWork/HowItWork";
import Organic from "./Organic/Organic";
import Property from "./property/Property";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Organic></Organic>
            <AboutUs></AboutUs>
            <HowItWork></HowItWork>
            <Property></Property>
        </div>
    );
};

export default Home;