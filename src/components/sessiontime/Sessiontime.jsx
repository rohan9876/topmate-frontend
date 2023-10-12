import React from 'react';
import { FaArrowCircleRight, FaCalendarDay } from 'react-icons/fa';
import './sessiontime.css';

function Sessiontime({ session }) {
  if (!session || session.length === 0) {
    // Render a placeholder or loading state when session is empty or undefined
    return <div>Loading...</div>;
  }

  return (
        <div className="reivew-left">
          <FaArrowCircleRight />
          <h3 className="review-left-topic">{session.sessionname}</h3>
          <hr className="review-left-line" color="dark" size="3" width="100%" />
          <div className="review-time">
            <div className="review-date"> 
              <h6>  
                <FaCalendarDay bounce /> 34-393-39 | 09:30 PM
              </h6>
            </div>
            <div className="review-free">
              <h6>Free</h6>
            </div>
          </div>
        </div>
  );
}

export default Sessiontime;
