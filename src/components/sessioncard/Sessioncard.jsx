import { FaClipboardCheck, FaClock, FaDatabase, FaRegClock, FaUserClock } from "react-icons/fa";
import "./sessioncard.css";
import { Button } from "react-bootstrap";


function BookYourSlot(){
    window.alert("Your session booked succesfully!");
}

function Sessioncard({ session }) {

    

    return (
        <div className="sessioncard">
            <div className="sessioncard-first">
                <img className="sessioncard-img" src="https://static.vecteezy.com/system/resources/previews/003/773/576/original/business-man-icon-free-vector.jpg" />
                <div className="sessioncard-intro">
                <h4 className="sessioncard-name">{ session.username }</h4>
                <h6 className="sessioncard-topic">{ session.sessionname }</h6>
                </div>
            </div>
            <div className="sessioncard-second">
                <FaRegClock className="clock-logo" />
                <p className="sessioncard-timing">{session.date} | {session.start}</p>
                <Button variant="outline-dark btn-book">Disc</Button>
                <Button variant="outline-dark btn-book" onClick={BookYourSlot}>Book</Button>
            </div>
        </div>
    )
}

export default Sessioncard;