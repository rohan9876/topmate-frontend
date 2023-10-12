import React, { useState } from 'react';

function Profileupdate() {
    const accessToken = localStorage.getItem("accessToken");

    const [username, setUsername] = useState('');
    const [experience, setExperience] = useState('');
    const [about, setAbout] = useState('');
    const [review, setReview] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const handleSubmit = async () => {
        // Prepare the data to send in the request body
        const data = {
            username,
            experience,
            about,
            review,
            socialmedia: [instagram, twitter, linkedin]
        };

        try {
            const response = await fetch("http://localhost:4000/api/guru/profile/update", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify(data)
            });

            if (response.status === 200) {
                window.alert("Profile updated");
            } else if (response.status === 403 || response.status === 404) {
                window.alert("You can only update your account");
            } else {
                window.alert(`Error: ${response.status}`);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            window.alert("An error occurred while updating the profile");
        }
    };

    return (
        <div className="createsession">
            <div className="createsession-form">
                <h3 className="form-heading">Create Session</h3>
                <input
                    className="createsession-input"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    className="createsession-input"
                    type="text"
                    name="experience"
                    placeholder="experience"
                    value={experience}
                    onChange={e => setExperience(e.target.value)}
                />
                <input
                    className="createsession-input"
                    type="text"
                    name="about"
                    placeholder="about"
                    value={about}
                    onChange={e => setAbout(e.target.value)}
                />
                <input
                    className="createsession-input"
                    type="text"
                    name="review"
                    placeholder="review"
                    value={review}
                    onChange={e => setReview(e.target.value)}
                />
                <input
                    type="text"
                    name="instagram"
                    placeholder="instagram"
                    className="createsession-input"
                    value={instagram}
                    onChange={e => setInstagram(e.target.value)}
                />
                <input
                    type="text"
                    name="twitter"
                    placeholder="twitter"
                    className="createsession-input"
                    value={twitter}
                    onChange={e => setTwitter(e.target.value)}
                />
                <input
                    type="text"
                    name="linkedin"
                    placeholder="linkedin"
                    className="createsession-input"
                    value={linkedin}
                    onChange={e => setLinkedin(e.target.value)}
                />
                <button onClick={handleSubmit} className="createsession-btn">
                    Create
                </button>
            </div>
        </div>
    );
}

export default Profileupdate;
