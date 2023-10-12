import React, { useState, useEffect } from 'react';
import { FaCalendarDay, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import Sessiontime from '../../components/sessiontime/Sessiontime';
import './profile.css';

function Profile() {
    const [guru, setGuru] = useState([]);
    useEffect(() => {
        const fetchGuru = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/guru/findguru/mohit', {
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


    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/session/findsessions/Rohan', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const responseData = await response.json();
                setData(responseData);
                console.log(responseData);
            } catch (error) {
                console.error('Error:', error.message);
                throw error;
            }
        };

        fetchData();
    }, []);


    return (
        <div className='profile'>
            <div className='profile-left'>
                <img className='profile-img' src='https://media.licdn.com/dms/image/C4D03AQFW-MJJLxTmwg/profile-displayphoto-shrink_800_800/0/1655145737216?e=2147483647&v=beta&t=oyI5XQjTnHzw41-34K5CVgKQ7r6eMe2Rm7OBbLlcEtA'></img>
                <h1 className='profile-name'> Aishverya </h1>

                <h5 className='profile-content'>
                    <span> Stock market expert | Trader </span>
                </h5>
                <div className='profile-session'>
                    <div className="profile-icon">
                        <FaCalendarDay bounce />
                        <h3 className="profile-data"> {data.length}+ session</h3>
                    </div>
                </div>
            </div>
            <div className='profile-right'>
                <div className="session-comp">
                    {data.map((session) => (
                        <Sessiontime session={session} />
                    ))}
                </div>
                <div className="ratting-feedback">
                    <h1 className="rat-feed-topic">Rattings and feedback</h1>
                    <div className="profile-ratting">
                        <div className="profile-ratting-box">
                            <h2> 4.5/5 </h2>
                            <h5>40 Rattings</h5>
                        </div>
                        <div className="profile-test-box">
                            <h2>40</h2>
                            <h5>Testimonial</h5>
                        </div>
                    </div>
                    <div className="profile-feed">
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <div className="profile-feed-div">
                                    <div className="profile-feed-box">
                                        <p className="profile-feed-box-content">I recently attended a stock market session, and I must say, it was a truly enlightening experience. The session was conducted by knowledgeable and experienced professionals who provided valuable insights and expert analysis of the market trends.</p>
                                        <h4 className="profile-reviewer">Rohan Singh</h4>
                                    </div>
                                    <div className="profile-feed-box">
                                        <p className="profile-feed-box-content">I recently had the pleasure of attending an empowering stock market seminar, and it was an eye-opening experience. The seminar was well-organized, and the speakers were incredibly passionate and knowledgeable about the financial markets.</p>
                                        <h4 className="profile-reviewer">Thomas</h4>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="profile-about">
                    <h1>About me</h1>
                    <div className="profile-social">
                        <div className="profile-social-box">
                            <FaInstagram />
                        </div>
                        <div className="profile-social-box">
                            <FaLinkedin />
                        </div>
                    </div>
                    <div className="profile-about-content">
                        <p>
                        Welcome to my stock market insights and analysis hub! I am a passionate and seasoned stock market expert, dedicated to empowering investors and traders with valuable knowledge and strategic guidance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;