const api = (userId, month) => {
  const payments = [];
  const priorMonthPayments = {month: {year: 2017, month: 7}, payments: [{amount: 80, category: 'golf'}, {amount: 490, category: 'dinner'}]};
  const currentMonthPayments = {month: {year: 2017, month: 8}, payments: [{amount: 20, category: 'uber'}, {amount: 510, category: 'dinner'}]};
  payments.push(priorMonthPayments);
  payments.push(currentMonthPayments);
  for (let i = 0; i < payments.length; i++) {
    if (payments[i].month === month) return payments[i];
  }
  return null;
};
export {api};
