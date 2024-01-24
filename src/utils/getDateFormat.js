const timeInSeconds = {
  year: 31536000,
  month: 2629800,
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const getDateFormat = (createdAt) => {
  const startTime = new Date(createdAt);
  const endTime = Date.now();
  const currentDate = Math.floor((endTime - startTime.getTime()) / 1000);
  let dateFormat = "now";

  for (let key in timeInSeconds) {
    const time = timeInSeconds[key];

    if (currentDate >= time) {
      let newDate = Math.floor(currentDate / time);

      dateFormat = `${newDate}  ${key}${newDate > 1 ? "s" : ""} ago`;
      break;
    }
  }

  return dateFormat;
};

export default getDateFormat;
