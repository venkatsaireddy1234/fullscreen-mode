import { useEffect, useRef, useState } from "react";

export  function useTimer(initialTime) {
    const [time, setTime] = useState(initialTime);
    const timerRef = useRef(null);
  
    const startCountdown = () => {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setTime((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    };
  
    const resetTimer = () => {
      clearInterval(timerRef.current);
      setTime(initialTime);
      startCountdown();
    };
  
    useEffect(() => {
      startCountdown();
      return () => clearInterval(timerRef.current);
    }, []);
  
    return { time, resetTimer };
  }
  