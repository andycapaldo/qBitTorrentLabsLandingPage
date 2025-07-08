import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const COUNTDOWN_FROM = "2025-07-08T06:00:00-06:00";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = ({ onComplete }: { onComplete?: () => void }) => {
  return (
    <div className="p-4 w-full md:w-3/4 xl:w-1/2">
      <div className="mx-auto flex w-full max-w-5xl items-center bg-secondary/35 rounded-lg text-white backdrop-blur-sm shadow-lg">
        <CountdownItem unit="Day" text="days" onComplete={onComplete} />
        <CountdownItem unit="Hour" text="hours" onComplete={onComplete} />
        <CountdownItem unit="Minute" text="minutes" onComplete={onComplete} />
        <CountdownItem unit="Second" text="seconds" onComplete={onComplete} />
      </div>
    </div>
  );
};

const CountdownItem = ({
  unit,
  text,
  onComplete,
}: {
  unit: string;
  text: string;
  onComplete?: () => void;
}) => {
  const { ref, time, isComplete } = useTimer(unit);

  useEffect(() => {
    if (isComplete && onComplete) onComplete();
  }, [isComplete, onComplete]);

  return (
    <div className="flex h-24 w-full flex-col items-center justify-center gap-1 font-mono md:h-36 md:gap-2">
      <div className="relative w-full overflow-hidden text-center">
        <span
          ref={ref}
          className="block text-2xl font-medium text-secondary md:text-4xl lg:text-6xl xl:text-7xl"
        >
          {time}
        </span>
      </div>
      <span className="text-xs px-1 font-light text-white md:text-sm lg:text-base">
        {text}
      </span>
    </div>
  );
};

export default ShiftingCountdown;


const useTimer = (unit: string) => {
  const [isComplete, setIsComplete] = useState(false);
  const [ref, animate] = useAnimate();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeRef = useRef(0);

  const [time, setTime] = useState(0);

  useEffect(() => {
    handleCountdown();
    intervalRef.current = setInterval(handleCountdown, 1000);
    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;

    if (unit === "Day") {
      newTime = Math.floor(distance / DAY);
    } else if (unit === "Hour") {
      newTime = Math.floor((distance % DAY) / HOUR);
    } else if (unit === "Minute") {
      newTime = Math.floor((distance % HOUR) / MINUTE);
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND);
    }

    if (newTime !== timeRef.current) {
      // Exit animation
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      // Enter animation
      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
    if (distance <= 0) {
      setIsComplete(true);
    clearInterval(intervalRef.current || undefined);
    return;
   }
  };

  return { ref, time, isComplete };
};