import {replace, when} from '../../test-helper';

describe.only('fetch', () => {
  it('orchestrates months and api', () => {
    const months = replace('./months');
    const api = replace('./api').api;

    let fetch;

    when(months.prior()).thenReturn('prior-month');
    when(months.current()).thenReturn('current-month');
    const priorMonthPayments = {month: {year: 2016, month: 12}, payments: [{amount: 80, category: 'golf'}, {amount: 490, category: 'dinner'}]};
    const currentMonthPayments = {month: {year: 2017, month: 1}, payments: [{amount: 20, category: 'uber'}, {amount: 510, category: 'dinner'}]};
    when(api('user-id', 'prior-month')).thenReturn(priorMonthPayments);
    when(api('user-id', 'current-month')).thenReturn(currentMonthPayments);

    fetch = require('./fetch').fetch;

    let payments = fetch('user-id');

    const expectedPayments = [priorMonthPayments, currentMonthPayments];

    payments.should.deepEqual(expectedPayments);
  });
});
