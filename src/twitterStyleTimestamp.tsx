export function twitterStyleTimestamp(timestamp: number) {
  const now = +new Date();
  const date = +new Date(timestamp);

  const secondsAgo = Math.floor((now - date) / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (secondsAgo < 60) {
    return `${secondsAgo}s`;
  }
  if (minutesAgo < 60) {
    return `${minutesAgo}m`;
  }
  if (hoursAgo < 24) {
    return `${hoursAgo}h`;
  }
  if (daysAgo < 7) {
    return `${daysAgo}d`;
  }

  const options = {
    month: 'short',
    day: 'numeric',
  } as const;

  return new Intl.DateTimeFormat('en-US', options).format(date);
}
