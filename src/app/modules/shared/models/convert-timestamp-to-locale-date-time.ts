export const convertTimestampToLocalDateTime = (timesTamp: string) => {
  const d = new Date(timesTamp);
  const date = d.toISOString().split('T')[0];
  const time = d.toTimeString().split(' ')[0];
  return `${date} ${time}`;
};
