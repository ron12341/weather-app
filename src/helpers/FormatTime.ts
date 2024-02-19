export const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  if (hours.length <= 1) hours = `0${hours}`;
  if (minutes.length <= 1) minutes = `0${minutes}`;

  let tempHours = Number.parseInt(hours)
  if(tempHours > 12) tempHours -= 12;
  hours = tempHours.toString();
  
  return `${hours}:${minutes}`;
};
