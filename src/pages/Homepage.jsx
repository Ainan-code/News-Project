import Header from "../Components/header";
import Carousel from "../Components/Carousel";
import Cards from "../Components/Cards";

import Footer from "../Components/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css";

function Homepage() {
    return (<div classNameName="layout">

        <Header/>
    <Carousel autoplay="true"></Carousel>
    <Cards title="Economy" />
    <Footer/>
    </div>)
}


export default Homepage;