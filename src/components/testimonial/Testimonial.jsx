import React, { useState } from 'react';
import "./testimonial.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const testimonials = [
  {
    id: 1,
    name: 'Aishverya',
    text: 'Strategic insights for confident investing.',
    img: 'https://media.licdn.com/dms/image/C4D03AQFW-MJJLxTmwg/profile-displayphoto-shrink_800_800/0/1655145737216?e=2147483647&v=beta&t=oyI5XQjTnHzw41-34K5CVgKQ7r6eMe2Rm7OBbLlcEtA'
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Seasoned pro guiding wealth creation with precision.',
    img: 'https://media.licdn.com/dms/image/C5603AQF86AwxZ2qV2A/profile-displayphoto-shrink_800_800/0/1653054824092?e=2147483647&v=beta&t=XpYRdOmFI2V7g_RC1iZaq3TZ5bIC8ISgZAL7DpWo9pA'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    text: 'Strategically analyzing markets, driving smart investments.',
    img: 'https://media.licdn.com/dms/image/C4E03AQHHJM625jMj_g/profile-displayphoto-shrink_800_800/0/1643071027791?e=2147483647&v=beta&t=a0G74aWyk8eQIdmKkZCEQRpOWD-Tpl77pLddwbhQQkc'
  },
  {
    id: 4,
    name: 'Mike Williams',
    text: 'Market insights, your key to profitable decisions.',
    img: 'https://media.licdn.com/dms/image/C5603AQFV51sAgZEiaw/profile-displayphoto-shrink_800_800/0/1660582657344?e=2147483647&v=beta&t=EHGP0BEGk4qPu-1MsCEmnPajlKFuPJOUedqLZqljVpo'
  },
  {
    id: 5,
    name: 'Emily Davis',
    text: 'Empowering investors with market knowledge.',
    img: 'https://media.licdn.com/dms/image/C5603AQHUILyE00lVzw/profile-displayphoto-shrink_800_800/0/1549943406537?e=2147483647&v=beta&t=tQnyKWxvwJj3zoG4eGw1WFKgIdECed3udbpfajRMyHs'
  }
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const showNextButton = currentIndex < testimonials.length - 4;
  const showPrevButton = currentIndex > 0;

  return (
    <div className="container container-test">
       <h1 className='top-expert'>Top Experts</h1>
      <div className="row">
        <div className="col">
          <div className="testimonial-carousel">
            <div className="testimonial-cards">
            {showPrevButton && (
                <button className="prev-btn" onClick={handleClickPrev}>
                <FaChevronLeft />
                </button>
              )}
              {testimonials.slice(currentIndex, currentIndex + 4).map((testimonial) => (
                <div className="testimonial-card" key={testimonial.id}>
                  <img src={testimonial.img} className="card-imgs" />
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.text}</p>
                </div>
              ))}
              {showNextButton && (
                <button className="next-btn" onClick={handleClickNext}>
                <FaChevronRight />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
