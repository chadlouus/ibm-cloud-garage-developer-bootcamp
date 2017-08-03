const api = (userId, month) => {
  const priorMonthPayments = {month: {year: 2016, month: 12}, payments: [{amount: 80, category: 'golf'}, {amount: 490, category: 'dinner'}]};
  const currentMonthPayments = {month: {year: 2017, month: 1}, payments: [{amount: 20, category: 'uber'}, {amount: 510, category: 'dinner'}]};
  return month === 'prior' ? priorMonthPayments : currentMonthPayments;
  //return priorMonthPayments;
};
export {api};
