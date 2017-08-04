import {payments} from './payments';

const api = (userId, month) => {
  const filteredArray = payments.filter((payment) => JSON.stringify(payment.month) === JSON.stringify(month.month));
  return filteredArray.length > 0 ? filteredArray[0] : null;
};

export {api};
