import { useEffect, useState } from "react";
import {
  ConvertToCountdown,
  convertToCountdown,
} from "@/lib/utils/convert-to-countdown";

export const useCountdown = (initialValue: ConvertToCountdown) => {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      setTimeRemaining(convertToCountdown(now));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return timeRemaining;
};
