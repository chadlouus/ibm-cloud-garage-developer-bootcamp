import {replace, when} from '../../test-helper';
import * as months from './months';

describe('fetch', () => {
  it('months api works', () => {
    months.prior().should.equal('prior');
  });

  it('orchestrates months and api', () => {
    const fetch = require('./fetch').fetch;

    const payments = fetch('user-id');

    const priorMonthPayments = {month: {year: 2017, month: 7}, payments: [{amount: 80, category: 'golf'}, {amount: 490, category: 'dinner'}]};
    const currentMonthPayments = {month: {year: 2017, month: 8}, payments: [{amount: 20, category: 'uber'}, {amount: 510, category: 'dinner'}]};
    const expectedPayments = [];
    expectedPayments.push(priorMonthPayments);
    expectedPayments.push(currentMonthPayments);

    payments.should.deepEqual(expectedPayments);
  });
});
