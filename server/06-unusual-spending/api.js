import {payments} from './payments';

const api = (userId, month) => {
  return payments.filter((payment) => JSON.stringify(payment.month) === JSON.stringify(month.month))[0];
};
export {api};
