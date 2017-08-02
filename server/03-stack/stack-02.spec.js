import {Stack} from './stack';
import {StackConst} from './stack-const';
import {STACK_OVERFLOW_ERROR, STACK_UNDERFLOW_ERROR, NEGATIVE_CAPACITY_ERROR} from './stack-errors';

let stack;

describe('the stack', () => {
  beforeEach(() => {
    stack = new Stack();
  });
  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });
  it('starts with stack size 0', () => {
    stack.size().should.equal(0);
  });
  it('is not be empty when pushed', () => {
    stack.push();
    stack.isEmpty().should.be.false();
  });
  it('leaves stack size 1 when pushed', () => {
    stack.push();
    stack.size().should.equal(1);
  });
  it('leaves stack empty when pushed and popped', () => {
    stack.push();
    stack.pop();
    stack.isEmpty().should.be.true();
  });
  it('leaves stack size 0 when pushed and popped', () => {
    stack.push();
    stack.pop();
    stack.size().should.equal(0);
  });
  it('overflows', () => {
    stack.push();
    stack.push();
    stack.push();
    (() => {
      stack.push();
    }).should.throw(STACK_OVERFLOW_ERROR);
  });
  it('under-flows', () => {
    (() => {
      stack.pop();
    }).should.throw(STACK_UNDERFLOW_ERROR);
  });
  it('pops the same one pushed', () => {
    stack.push(3);
    stack.pop().should.equal(3);
  });
  it('pops the same two pushed', () => {
    let value1 = 5;
    let value2 = 'blue';
    stack.push(value1);
    stack.push(value2);
    stack.pop().should.equal(value2);
    stack.pop().should.equal(value1);
  });
  it('accepts only positive capacity', () => {
    (() => {
      stack.setCapacity(-3);
    }).should.throw(NEGATIVE_CAPACITY_ERROR);
  });
});
