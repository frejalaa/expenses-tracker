export const getFormattedDate = (date) => {
  // return in format MM-DD-YYYY
  return `${date.getUTCMonth() + 1}-${date.getUTCDate()}-${date.getUTCFullYear()}`;
};