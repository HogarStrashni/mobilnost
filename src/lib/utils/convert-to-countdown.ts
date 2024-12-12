export const convertToCountdown = (now: number) => {
  const deadLine = new Date("2025-03-01T00:00:00Z").getTime();
  const distance = deadLine - now;
  return {
    days: Math.floor(distance / (1000 * 86400)),
    hours: Math.floor((distance % (1000 * 86400)) / (1000 * 3600)),
    minutes: Math.floor((distance % (1000 * 3600)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

export type ConvertToCountdown = ReturnType<typeof convertToCountdown>;
