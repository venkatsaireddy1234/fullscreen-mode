import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFullscreen} from '../hooks/useFullscreen';  
import { useTimer } from "../hooks/useTimer";
import { useExam } from "../hooks/useExam";

function Assessment() {
  const navigate = useNavigate();
  const [exitAttempts, setExitAttempts] = useState(0);

  const { time, resetTimer } = useTimer(60);
  const { resetExam } = useExam(navigate, resetTimer);
  const { isFullScreen, exitFullScreen, enterFullScreen, exitWarning } = useFullscreen(navigate, exitAttempts, setExitAttempts);

  const handleExamEnd = (path) => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((error) => {
        console.error("Error exiting full-screen:", error);
      });
    }
    navigate(path);
  };

  const toggleFullScreen = () => {
    if (isFullScreen) {
      navigate("/violation");
      exitFullScreen();
    } else {
      enterFullScreen();
    }
  };

  const preventCopy = (e) => e.preventDefault();

  return (
    <div className="assessment-page" onCopy={preventCopy}>
      <div
        className="timer"
        style={{ position: "absolute", top: "10px", right: "10px" }}
      >
        Time Left: {time}s
        <button onClick={resetTimer}>🔄 Reset Timer</button>
      </div>

      {time <= 5 && <div className="warning">Time is up! Your question will be auto-submitted.</div>}

      {exitWarning && (
        <div className="exit-warning" style={styles.exitWarning}>
          {exitWarning}
        </div>
      )}

      <div className="question">
        <p onCopy={preventCopy}>What is the capital of France?</p>
        <textarea placeholder="Type your answer here"></textarea>
      </div>

      <button onClick={() => handleExamEnd("/thankyou")}>Submit</button>
      <button onClick={resetExam}>Reset Exam</button>

      <div style={styles.fullscreenButtonContainer}>
        <button onClick={toggleFullScreen} style={styles.fullscreenButton}>
          {isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  fullscreenButtonContainer: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    zIndex: 1000,
  },
  fullscreenButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  exitWarning: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 0, 0, 0.8)",
    color: "#fff",
    padding: "20px",
    borderRadius: "8px",
    fontSize: "18px",
    zIndex: 2000,
    textAlign: "center",
  },
};

export default Assessment;
