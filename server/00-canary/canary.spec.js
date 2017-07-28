describe('the canary spec', () => {
  it.only('shows the infrastructure works', () => {
    true.should.be.true('this is some custom diagnostic message');
  });
});
