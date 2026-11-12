const timeInSeconds: Record<string, number> = {
  year: 31536000,
  month: 2629800,
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const getDateFormat = (createdAt: string | number | Date): string => {
  const startTime = new Date(createdAt);
  const currentDate = Math.floor((Date.now() - startTime.getTime()) / 1000);
  let dateFormat = "now";

  for (const [key, time] of Object.entries(timeInSeconds)) {
    if (currentDate >= time) {
      const newDate = Math.floor(currentDate / time);
      dateFormat = `${newDate}  ${key}${newDate > 1 ? "s" : ""} ago`;
      break;
    }
  }

  return dateFormat;
};

export default getDateFormat;
