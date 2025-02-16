"use client"

import React, { useEffect, useState } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownPageProps = {
  onCountdownComplete: () => void;
};

const CountdownPage = ({ onCountdownComplete }: CountdownPageProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = (): TimeLeft => {
    const launchDate = new Date('2025-02-18T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Check if countdown is complete
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(timer);
        onCountdownComplete();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onCountdownComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/car1.webp')] bg-cover bg-no-repeat text-white">
      <div className="bg-black opacity-80 p-4">
        <h1 className="text-5xl font-bold mb-6">Launching Soon!</h1>
        <div className="flex space-x-4 text-center">
          <div>
            <p className="text-6xl font-bold">{timeLeft.days}</p>
            <span className="text-xl">Days</span>
          </div>
          <div>
            <p className="text-6xl font-bold">{timeLeft.hours}</p>
            <span className="text-xl">Hours</span>
          </div>
          <div>
            <p className="text-6xl font-bold">{timeLeft.minutes}</p>
            <span className="text-xl">Minutes</span>
          </div>
          <div>
            <p className="text-6xl font-bold">{timeLeft.seconds}</p>
            <span className="text-xl">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;
