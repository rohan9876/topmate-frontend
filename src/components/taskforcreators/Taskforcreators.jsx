import { Button } from "react-bootstrap";
import "./taskforcreators.css"

function redirectToCreatesession(){
    window.location.href = "/createsession";
}

function Taskforcreators(){
    return (
        <div className="task">
            <h1>What all you can do?</h1>
            <div className="task-container">
                <div className="task-single">
                    <h3>1:1 sessions with design aspirants</h3>
                    <p>Take 1:1 mock interviews, guide and help your followers get a kick-start in their career</p>
                    <button className="task-btn" onClick={redirectToCreatesession}>Conduct</button>
                </div>
                <div className="task-single">
                    <h3>Conduct a workshop</h3>
                    <p>Connect personally with your followers, help them master the skill</p>
                    <button className="task-btn">Conduct</button>
                </div>
                <div className="task-single">
                    <h3>Answer design related queries</h3>
                    <p>Monetise your incoming queries and provide priority help to your followers</p>
                    <button className="task-btn">Conduct</button>
                </div>
            </div>
        </div>
    );
}

export default Taskforcreators;