// TODO: convert month, year to a function

const current = (today = new Date()) => {
  const month = (today.getMonth() + 1);
  const year = today.getYear() + 1900;
  return {month: {year: year, month: month}};
};

const prior = (today = new Date()) => {
  let month = (today.getMonth() + 1);
  let year = today.getYear() + 1900;
  if (month === 1) {
    month = 12;
    year--;
  } else {
    month--;
  }
  return {month: {year: year, month: month}};
};

export {prior, current};

