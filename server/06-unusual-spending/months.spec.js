import * as months from './months';

describe.only('months', () => {
   it('calling current() on 01Aug2017 should return the current month', () => {
     const expected = {month: {year: 2017, month: 8}};
     months.current(new Date('8/1/2017')).should.deepEqual(expected);
   });
   it('calling prior() on 01Aug2017 should return the previous month', () => {
     const expected = {month: {year: 2017, month: 7}};
     months.prior(new Date('8/1/2017')).should.deepEqual(expected);
   });
   it('when date is 1/1/2018, current() should return year: 2018, month: 1', () => {
     const expected = {month: {year: 2018, month: 1}};
     months.current(new Date('1/1/2018')).should.deepEqual(expected);
   });
   it('when date is 1/1/2018, prior() should return year: 2017, month: 12', () => {
     const expected = {month: {year: 2017, month: 12}};
     months.prior(new Date('1/1/2018')).should.deepEqual(expected);
   });

});
