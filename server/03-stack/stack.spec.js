const LIMIT = 3;

let makeStack = () => {
  let size = 0;
  const array = [];
  return {
    isEmpty: () => size === 0,
    push: (number) => {
      size++;
      array.push(number);
      if (size > LIMIT) throw new Error('Cannot exceed ', LIMIT);
    },
    pop: () => {
      if (size <= 0) throw new Error('Cannot pop an empty stack');
      size--;
      return array.pop();
    },
    size: () => size
  };
};

let stack;

describe.only('the stack spec', () => {
  beforeEach(() => {
    stack = makeStack();
  });
 it('starts empty', () => {
   stack.isEmpty().should.be.true();
 });

 it('starts with stack size 0', () => {
   stack.size().should.equal(0);
 });

 it('is not empty when pushed', () => {
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
   const overFlowFunction = () => {
     stack.push();
   };
   // (() => {
   //      stack.push();
   //    }).should.throw('Cannot exceed ', LIMIT);
   //stack.push.should.throw('Cannot exceed ', LIMIT);
   overFlowFunction.should.throw('Cannot exceed ', LIMIT);
 });

 it('under-flows', () => {
   (stack.pop).should.throw('Cannot pop an empty stack');
   stack.push();
   stack.pop();
   (stack.pop).should.throw('Cannot pop an empty stack');
 });

 it('pops the same one pushed', () => {
   stack.push(3);
   stack.pop().should.equal(3);
   stack.push('red');
   stack.pop().should.equal('red');
 });

 it('pops the same two pushed');

 it('accepts only positive capacity');

});


