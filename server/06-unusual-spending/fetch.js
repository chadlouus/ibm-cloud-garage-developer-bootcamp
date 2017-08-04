import * as months from './months';
import {api} from './api';

const fetch = (userId) => {
  const payments = [];
  payments.push(api(userId, months.prior()));
  payments.push(api(userId, months.current()));
  return payments;
};

export {fetch};
