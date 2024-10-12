import { useEffect, useState } from "react";

export  function useFullscreen(navigate, exitAttempts, setExitAttempts) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [exitWarning, setExitWarning] = useState("");

  const enterFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((error) => {
        console.error("Failed to enter full-screen:", error);
      });
    }
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((error) => {
        console.error("Failed to exit full-screen:", error);
      });
    }
  };

  const handleFullScreenChange = () => {
    if (!document.fullscreenElement) {
      setExitAttempts((prev) => prev + 1);
      if (exitAttempts + 1 === 2) {
        navigate("/violation");
        exitFullScreen();
      } else {
        setExitWarning("You cannot exit full-screen mode during the assessment.");
        setTimeout(() => setExitWarning(""), 3000);
        enterFullScreen();
      }
    }
    setIsFullScreen(!!document.fullscreenElement);
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, [exitAttempts]);

  return { isFullScreen, exitFullScreen, enterFullScreen, exitWarning, handleFullScreenChange };
}


