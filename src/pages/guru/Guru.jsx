import Navigation from "../../components/navigation/Navigation";
import { Button } from "react-bootstrap";
import Testimonial from "../../components/testimonial/Testimonial"
import "./guru.css";
import Expertintro from "../../components/expertintro/Expertintro";
import Sessiontype from "../../components/sessiontype/Sessiontype";
import Taskforcreators from "../../components/taskforcreators/Taskforcreators";
import Footer from "../../components/footer/Footer"


function Guru() {
    return (
        <div>
            <Navigation />
            <Expertintro />
            <Sessiontype />
            <Testimonial />
            <Taskforcreators />
            <Footer />
        </div>
    )
}

export default Guru;