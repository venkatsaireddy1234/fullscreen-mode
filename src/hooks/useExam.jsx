export  function useExam(navigate, resetTimer) {
    const resetExam = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch((error) => {
          console.error("Error exiting full-screen:", error);
        });
      }
      resetTimer();
      navigate("/");
    };
  
    return { resetExam };
  }
  