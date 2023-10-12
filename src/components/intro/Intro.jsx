import Button from 'react-bootstrap/Button';
import './intro.css';

function redicectToSignup(){
  window.location = "/signup";
}

function Intro() {
  return (
    <div className="intro">
      <div className="left">
        <span>Navigate</span> <br />
        <span>the tides of uncertainty</span> <br />
        <span>with expert insights.</span>
        <br />
        <Button className="signup-button" variant="dark" onClick={redicectToSignup}>Sign Up</Button>
      </div>
      <div className="right">
        <img className='intro-img'  src='https://img.freepik.com/free-photo/cheerful-business-woman-standing-isolated_171337-8492.jpg'></img>
      </div>
    </div>
  );
}

export default Intro;
