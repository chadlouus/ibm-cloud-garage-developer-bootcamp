import {replace, when, verify} from '../../test-helper';

describe.only('unusual spending', () => {
  it('canary test', () => {
    true.should.be.true();
  });
  it('should orchestrate categorize, payment and email', () => {
    const fetch = replace('./fetch').fetch;
    const categorize = replace('./categorize').categorize;
    const email = replace('./email').email;

    let unusualSpending = replace('./unusual-spending').unusualSpending;
    when(fetch('user-id')).thenReturn('payments');
    when(categorize('payments')).thenReturn('categorized-payments');
    unusualSpending('user-id');
    verify(email("user-id", 'categorized-payments'));
  })
});
