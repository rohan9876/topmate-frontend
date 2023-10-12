import Guru from "../guru/Guru";
import Intro from "../../components/intro/Intro";
import Navigation from "../../components/navigation/Navigation";
import Testimonial from "../../components/testimonial/Testimonial"
import "./home.css";
import Homereview from "../../components/homereview/Homereview";
import Taskforcreators from "../../components/taskforcreators/Taskforcreators";
import Footer from "../../components/footer/Footer"

function Home() {
    return (
        <div>
            <Navigation />
            <Intro />  
            <Testimonial />
            <Homereview />
            <Taskforcreators />
            <Footer />
        </div> 
    );
}

export default Home; 