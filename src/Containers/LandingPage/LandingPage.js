import ImageSlider from "../../Components/ImageSlider";
import ProductList from "../ProductList";
import LandingGreet from "../../Components/LandingGreet";
import "./LandingPage.css"

const LandingPage = () => {
    return (
      <>
        <ImageSlider />
        <LandingGreet/>
        <ProductList/>
        {/* //about , products, testimony */}
      </>
    );
}

export default LandingPage;