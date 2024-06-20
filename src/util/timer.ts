import { TimeLeft } from "../type";

export function convertToTimeLeft(counterMs: number): TimeLeft {
  const day = Math.floor(counterMs / 86400000);
  const hour = Math.floor((counterMs - day * 86400000) / 3600000);
  const minute = Math.floor(
    (counterMs - day * 86400000 - hour * 3600000) / 60000
  );
  const second = Math.floor(
    (counterMs - day * 86400000 - hour * 3600000 - minute * 60000) / 1000
  );

  return {
    day,
    hour,
    minute,
    second,
  };
}
