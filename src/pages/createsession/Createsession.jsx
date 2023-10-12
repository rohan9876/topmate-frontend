// React component - Createsession.js
import React, { useState } from "react";
import "./createsession.css";

function Createsession() {
  const accessToken = localStorage.getItem("accessToken");
  const [session, setSession] = useState({
    username: "",
    name: "",
    sessionname: "",
    topic: "",
    date: "",
    starttime: "",
    endtime: "",
    description: "",
  });

  const handleChange = (e) => {
    setSession({ ...session, [e.target.name]: e.target.value });
  };

  const handleSession = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/session/register", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(session),
      });

      if (response.status === 200) {
        window.alert("Your session registered");
      } else {
        window.alert("You can only create session from your account");
      }
    } catch {
      window.alert("An error occurred");
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
          value={session.username}
          onChange={handleChange}
        />
        <input
          className="createsession-input"
          type="text"
          name="name"
          placeholder="Name"
          value={session.name}
          onChange={handleChange}
        />
        <input
          className="createsession-input"
          type="text"
          name="sessionname"
          placeholder="Session name"
          value={session.sessionname}
          onChange={handleChange}
        />
        <input
          className="createsession-input"
          type="text"
          name="topic"
          placeholder="Topic"
          value={session.topic}
          onChange={handleChange}
        />
        <input
          type="date"
          id="date"
          name="date"
          value={session.date}
          onChange={handleChange}
          className="createsession-input"
        />
        <input
          className="createsession-input"
          id="appt-time"
          type="time"
          name="starttime"
          min="00:00"
          max="23:59"
          value={session.starttime}
          onChange={handleChange}
        />
        <input
          className="createsession-input"
          id="appt-time"
          type="time"
          name="endtime"
          min="00:00"
          max="23:59"
          value={session.endtime}
          onChange={handleChange}
        />
        <input
          className="createsession-input-dis"
          type="text"
          name="description"
          placeholder="Description"
          value={session.description}
          onChange={handleChange}
        />
        <button type="submit" className="createsession-btn" onClick={handleSession}>
          Create
        </button>
      </div>
    </div>
  );
}

export default Createsession;
