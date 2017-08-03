/* eslint-disable no-param-reassign */
function primeFactorsOf(number) {
  const factors = [];
  for (let divisor = 2; divisor < number; divisor++) {
    for (number > 1; number % divisor === 0; number /= divisor) factors.push(divisor);
  }
  if (number > 1) factors.push(number);
  return factors;
}

describe('the prime numbers canary spec', () => {
  it('canary test', () => {
    true.should.be.true();
  });

  it('return none for 1', () => {
    primeFactorsOf(1).should.deepEqual([]);
  });
  it('return [2] for 2', () => {
    primeFactorsOf(2).should.deepEqual([2]);
  });
  it('return [3] for 3', () => {
    primeFactorsOf(3).should.deepEqual([3]);
  });
  it('return [2, 2] for 4', () => {
    primeFactorsOf(4).should.deepEqual([2, 2]);
  });
  it('return [5] for 5', () => {
    primeFactorsOf(5).should.deepEqual([5]);
  });
  it('return [2, 3] for 6', () => {
    primeFactorsOf(6).should.deepEqual([2, 3]);
  });
  it('return [7] for 7', () => {
    primeFactorsOf(7).should.deepEqual([7]);
  });
  it('return [2, 2, 2] for 8', () => {
    primeFactorsOf(8).should.deepEqual([2, 2, 2]);
  });
  it('return [3, 3] for 9', () => {
    primeFactorsOf(9).should.deepEqual([3, 3]);
  });
  it('return [2, 2, 5, 5] for 100', () => {
    primeFactorsOf(100).should.deepEqual([2, 2, 5, 5]);
  });
  it('return [2, 2, 2, 2, 2, 3, 3, 7] for 2016', () => {
    primeFactorsOf(2016).should.deepEqual([2, 2, 2, 2, 2, 3, 3, 7]);
  });
  it('return [2017] for 2017', () => {
    primeFactorsOf(2017).should.deepEqual([2017]);
  });
  it('return [11, 23] for 253', () => {
    primeFactorsOf(253).should.deepEqual([11, 23]);
  });

});
