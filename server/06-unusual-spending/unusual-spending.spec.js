import {replace, when, verify} from '../../test-helper';

describe.only('unusual spending', () => {
  it('Canary test', () => {
    true.should.be.true();
  });

  it('orchestrates fetch, categorize and email', () => {
    const fetch = replace('./fetch').fetch;
    const categorize = replace('./categorize').categorize;
    const email = replace('./email').email;

    let unusualSpending;

    when(fetch('user-id')).thenReturn('payments');
    when(categorize('payments')).thenReturn('categorized-payments');

    unusualSpending = require('./unusual-spending').unusualSpending;

    unusualSpending('user-id');

    verify(email('user-id', 'categorized-payments'));
  });
});
