import React, { Component, useEffect, useState } from 'react'
import "./userprofile.css";
import Sessiontime from '../../components/sessiontime/Sessiontime';
import { FaArrowCircleRight, FaCalendarDay, FaInstagram, FaLinkedin } from 'react-icons/fa';


function Userprofile() {
  const  currUser = localStorage.getItem('username');
  function redirectToaddsession(){
    window.location.href = "/createsession";
  }
  const [guru, setGuru] = useState([]);
  useEffect(() => {
    const fetchGuru = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/guru/findguru/shubhanshu', {
          methdo: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const responseGuru = await response.json();
        setGuru(responseGuru);
      }
      catch (err) {
        console.log(err, err.message);
        throw err;
      }
    }
    fetchGuru();
  }, []);


  return (
    <div>
      <div className='backgroung'>
        <img className='background-img' src='https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
      </div>
      <div className='userprofile-img-sct'>
        <img className='bg-profile-img' src='https://media.licdn.com/dms/image/C4D03AQFW-MJJLxTmwg/profile-displayphoto-shrink_800_800/0/1655145737216?e=2147483647&v=beta&t=oyI5XQjTnHzw41-34K5CVgKQ7r6eMe2Rm7OBbLlcEtA'></img>
        <h4>{currUser}</h4>
        <p>{guru[0]?.email}</p>
      </div>
      <div className='userprofile-middle'>
        <div>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        <div className='session-add'>
          <h4>Sessions</h4>
          <button className='userprofile-btn' onClick={ redirectToaddsession }> <h5>Add</h5> </button>
        </div>
        <div className='userprofile-session'>
          <div className="up-reivew-left" >
            <FaArrowCircleRight />
            <h4 className="up-review-left-topic"> Conquering Personal Goals Amidst the Demands of a </h4>
            <hr className="review-left-line" color="dark" size="3" width="100%" />
            <div className="up-review-time">
              <div className="up-review-date"> <h6> <FaCalendarDay bounce /> 24 June | 09:30 PM </h6> </div>
              <div className="up-review-free"> <h6> Free </h6> </div>
            </div>
          </div>
          <div className="up-reivew-left" >
            <FaArrowCircleRight />
            <h4 className="up-review-left-topic"> Conquering Personal Goals Amidst the Demands of a </h4>
            <hr className="review-left-line" color="dark" size="3" width="100%" />
            <div className="up-review-time">
              <div className="up-review-date"> <h6> <FaCalendarDay bounce /> 24 June | 09:30 PM </h6> </div>
              <div className="up-review-free"> <h6> Free </h6> </div>
            </div>
          </div>
          <div className="up-reivew-left" >
            <FaArrowCircleRight />
            <h4 className="up-review-left-topic"> Conquering Personal Goals Amidst the Demands of a </h4>
            <hr className="review-left-line" color="dark" size="3" width="100%" />
            <div className="up-review-time">
              <div className="up-review-date"> <h6> <FaCalendarDay bounce /> 24 June | 09:30 PM </h6> </div>
              <div className="up-review-free"> <h6> Free </h6> </div>
            </div>
          </div>
        </div>
        <h1 className='userprofile-contact'>Contact me</h1>
        <div className="profile-social">
          <div className="profile-social-box">
            <FaInstagram />
          </div>
          <div className="profile-social-box">
            <FaLinkedin/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userprofile;