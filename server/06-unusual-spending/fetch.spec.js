import {payments} from './payments';
import {fetch} from './fetch';

describe.only('fetch', () => {
  it('orchestrates months and api', () => {
    fetch('user-id').should.deepEqual(payments);
  });
});
