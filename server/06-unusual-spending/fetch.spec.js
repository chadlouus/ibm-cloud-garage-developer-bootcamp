import {replace, when} from '../../test-helper';
import * as months from './months';
import {payments} from './payments';

describe.only('fetch', () => {
  it('orchestrates months and api', () => {
    const fetch = require('./fetch').fetch;
    fetch('user-id').should.deepEqual(payments);
  });
});
