import "./expertintro.css";
import { Button } from "react-bootstrap";

function redirectToCreatesession(){
    window.location.href = "/createsession";
}

function Expertintro(){
    return(
        <div className="expert-intro">
            <div className="expert-intro-left">
                <span> The ultimate monetisation </span>
                <span> tool for creators </span>
                <p className="expert-intro-text">Connect 1:1 with your followers. Host group sessions. Sell your digital products. It's all possible with Topmate!</p>
                <button className="btn btn-outline-dark expert-btn" onClick={redirectToCreatesession}>Create Session</button>
            </div>
            <div className="expert-intro-right">
                <img className="expert-intro-img" src="https://media.licdn.com/dms/image/C4D03AQFW-MJJLxTmwg/profile-displayphoto-shrink_800_800/0/1655145737216?e=2147483647&v=beta&t=oyI5XQjTnHzw41-34K5CVgKQ7r6eMe2Rm7OBbLlcEtA" />
            </div>
        </div>
    )
}

export default Expertintro;