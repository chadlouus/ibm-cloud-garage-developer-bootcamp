let makeStack = () => {
  const array = [];
  let capacity = 3;
  return {
    setCapacity: (value) => {
      if (value < 0) throw new Error('capacity must be positive values only');
      capacity = value;
    },
    isEmpty: () => array.length === 0,
    push: (value) => {
      if (array.length >= capacity) throw new Error('Cannot exceed ', capacity);
      array.push(value);
    },
    pop: () => {
      if (array.length <= 0) throw new Error('Cannot pop an empty stack');
      return array.pop();
    },
    capacity: () => capacity,
    size: () => array.length
  };
};

let stack;

describe('the stack spec', () => {
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
   for (let i = 0; i < stack.capacity(); i++) {
     stack.push();
   }
   const overFlowFunction = () => {
     stack.push();
   };
   // (() => {
   //      stack.push();
   //    }).should.throw('Cannot exceed ', capacity);
   //stack.push.should.throw('Cannot exceed ', capacity);
   overFlowFunction.should.throw('Cannot exceed ', stack.capacity);
 });

 it('under-flows', () => {
   (stack.pop).should.throw('Cannot pop an empty stack');
   stack.push();
   stack.pop();
   (stack.pop).should.throw('Cannot pop an empty stack');
 });

 it('pops the same one pushed', () => {
   let valueToPush = 3;
   stack.push(valueToPush);
   stack.pop().should.equal(valueToPush);
   valueToPush = 'red';
   stack.push(valueToPush);
   stack.pop().should.equal(valueToPush);
 });

 it('pops the same two pushed', () => {
   const value1 = '5';
   const value2 = 'blue';
   stack.push(value1);
   stack.push(value2);
   stack.pop().should.equal(value2);
   stack.pop().should.equal(value1);
 });

 it('accepts only positive capacity', () => {
   (() => {
     stack.setCapacity(-3);
   }).should.throw('capacity must be positive values only');
 });

});


