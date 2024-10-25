import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HealthCheck() {
    const [status, setStatus] = useState("Off");

    const url = "http://localhost:3001/api/healthcheck";
    useEffect(() => {
        axios.get(url)
            .then(function (response) {
                if(response.status == 200) {
                    setStatus("On");
                }
            }).catch(function (error) {
                console.log("Error:", error);
            });
    }, []);

    return (
        <h1>{status}</h1>
    );
}