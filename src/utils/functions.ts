import type { DateFormat } from "./enums";

export const timeSincePublication = (articleDate: Date) : string => {
  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - articleDate.getTime();

  // Convert the time difference to seconds
  const seconds = Math.floor(timeDifference / 1000);

  // Calculate minutes, hours, days, months, and years
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // Assuming an average of 30 days per month
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else {
    return 'Just now';
  }
}

export function displayDate(date: Date, format: DateFormat): string {
  const options: Intl.DateTimeFormatOptions = {
    year: format.includes('YYYY') ? 'numeric' : undefined,
    month: format.includes('MM') ? '2-digit' : undefined,
    day: format.includes('DD') ? '2-digit' : undefined,
    hour: format.includes('HH') ? '2-digit' : undefined,
    minute: format.includes('mm') ? '2-digit' : undefined,
    second: format.includes('ss') ? '2-digit' : undefined,
    timeZone: 'UTC',
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}
