"use client";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const getTimeLeft = () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0); // Set to midnight next day
      return Math.max(
        0,
        Math.floor((midnight.getTime() - now.getTime()) / 1000),
      );
    };

    setTimeLeft(getTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) {
    return <div>Loading...</div>; // Or any loading placeholder
  }

  const { hours, minutes, seconds } = formatTime(timeLeft);
  const boxStyle =
    "w-7 h-7 flex justify-center items-center bg-nk-main-inactive rounded";

  return (
    <div className="flex items-center gap-1 rounded-md text-xs font-bold leading-none">
      <div className={boxStyle}>{hours}</div>
      <span>:</span>
      <div className={boxStyle}>{minutes}</div>
      <span>:</span>
      <div className={boxStyle}>{seconds}</div>
    </div>
  );
};

// Format time into hours, minutes, and seconds
const formatTime = (seconds: number) => {
  return {
    hours: String(Math.floor(seconds / 3600)).padStart(2, "0"),
    minutes: String(Math.floor((seconds % 3600) / 60)).padStart(2, "0"),
    seconds: String(seconds % 60).padStart(2, "0"),
  };
};

export default CountdownTimer;
