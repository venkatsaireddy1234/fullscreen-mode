import React from 'react';
import { useReAttempt } from  '../hooks/useReAttempt'; 

function ThankYou() {
  const { handleReAttempt } = useReAttempt();

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>Thank you for attempting the Assessment</h1>
      <p>Your Assessment is Over.</p>
      <button onClick={handleReAttempt} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Re-Attempt
      </button>
    </div>
  );
}

export default ThankYou;
