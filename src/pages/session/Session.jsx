import "./session.css";
import Navigation from "../../components/navigation/Navigation";
import Sessioncard from "../../components/sessioncard/Sessioncard";
import { useEffect, useState } from "react";



function Session(){

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/session/findallsession', {
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
        <div className="session">

            <Navigation />
            <div className="sessioncard-div">
                {data.map((session) => (
                    <div className="sesssioncard-in">
                        <Sessioncard  session={session} className="sesssioncard-in" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Session;