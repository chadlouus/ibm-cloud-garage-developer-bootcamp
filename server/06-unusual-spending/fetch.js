import {prior, current} from './months';
import {api} from './api';

const fetch = (userId) => {
  let priorMonth = prior();
  let currentMonth = current();
  let priorMonthPayments = api(userId, priorMonth);
  let currentMonthPayments = api(userId, currentMonth);

  return [priorMonthPayments, currentMonthPayments];
};

export {fetch};
