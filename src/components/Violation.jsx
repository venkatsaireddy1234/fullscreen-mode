import React from 'react';
import { useReAttempt } from '../hooks/useReAttempt';

function Violation() {
    const { handleReAttempt } = useReAttempt();

    return (
        <div style={{ textAlign: 'center', marginTop: '20vh' }}>
            <h1>You have violated the rules of the Assessment</h1>
            <p>Try again next time.</p>
            <button onClick={handleReAttempt} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Re-Attempt
      </button>
        </div>
    );
}

export default Violation;