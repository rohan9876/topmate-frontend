import { FaGlobe, FaPeopleArrows, FaStarHalfAlt } from "react-icons/fa";
import "./sessiontype.css"

function Sessiontype(){
    return (
        <div className="sessiontype">
            <h1 className="sessiontype-txt">Why should stock expert use stockmate?</h1>

            <div className="sessiontype-container">
                <div className="sessiontype-container-first">
                    <FaStarHalfAlt className="sessiontype-icon"/>
                    <h3 className="sessiontype-heading">Begin your side hustle</h3>
                    <p className="sesiontype-container-txt">Always had the kick to start something of your own? Start with monetising your time with Topmate!</p>
                </div>
                <div className="sessiontype-container-first">
                    <FaGlobe className="sessiontype-icon"/>
                    <h3 className="sessiontype-heading">Connect with your followers</h3>
                    <p className="sesiontype-container-txt">1:1 | Group calls | webinar | Queries | Seamless Packages. Get your hands on everything at one place</p>
                </div>
                <div className="sessiontype-container-first">
                    <FaPeopleArrows className="sessiontype-icon"/>
                    <h3 className="sessiontype-heading">Up-skill your community</h3>
                    <p className="sesiontype-container-txt">Build and connect with folks from your ecosystem, exchange, share and monetise your community</p>
                </div>
            </div> 
        </div>
    )
}
 
export default Sessiontype;
