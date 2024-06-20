import { useEffect, useRef, useState } from "react";
import { TimeLeft } from "./type";
import { convertToTimeLeft } from "./util/timer";

export function useCountDownTimer(counterMs: number): TimeLeft {
  const leftCounterMs = useRef(counterMs);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    convertToTimeLeft(counterMs)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(convertToTimeLeft(--leftCounterMs.current));

      if (leftCounterMs.current <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return timeLeft;
}
