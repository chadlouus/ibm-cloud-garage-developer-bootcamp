import {api} from './api';

describe('api', () => {
  const month = {month: {year: 2017, month: 7}};
  const payment = api('userId', month);
  const priorMonthPayments = {month: {year: 2017, month: 7}, payments: [{amount: 80, category: 'golf'}, {amount: 490, category: 'dinner'}]};
  payment.should.deepEqual(priorMonthPayments);
});
