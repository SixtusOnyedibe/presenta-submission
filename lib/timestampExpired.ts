const hasTimestampElapsed = (timestamp: string): boolean => {
  const now = new Date();
  const targetDate = new Date(timestamp);
  return now > targetDate;
};

export default hasTimestampElapsed;
