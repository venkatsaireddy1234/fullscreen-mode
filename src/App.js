import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Assessment from './components/Assesment';
import ThankYou from './components/ThankYou';
import Violation from './components/Violation';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />

                <Route path="/assessment" element={<Assessment />} />

                <Route path="/thankyou" element={<ThankYou />} />

                <Route path="/violation" element={<Violation />} />
            </Routes>
        </Router>
    );
}

export default App;
