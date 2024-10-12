import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate();

    const handleStartAssessment = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            console.error("Full-screen mode is not supported in this browser.");
        }
        navigate('/assessment');
    };

    return (
        <div className="landing-page">
            <h1>Welcome to the Exam Portal</h1>
            <button onClick={handleStartAssessment}>
                Start Assessment
            </button>
        </div>
    );
}

export default LandingPage;