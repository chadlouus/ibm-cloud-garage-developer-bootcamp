let stackFactory = () => {
  let size = 0;
  return {
    isEmpty: () => {
      return size === 0;
    },
    push: () => {
      size++;
    },
    size: () => size
  };
};

let stack = stackFactory();

describe.only('the stack spec', () => {
 it('starts empty', () => {
   stack.isEmpty().should.be.true();
 });

 it('starts with stack size 0', () => {
   stack.size().should.equal(0);
 });

 it('is not empty when pushed', () => {
   stack.push();
   console.log('size2 is ', stack.size());
   stack.isEmpty().should.be.false();
 });

 it('leaves stack size 1 when pushed');

 it('leaves stack empty when pushed and popped');

 it('leaves stack size 0 when pushed and popped');

 it('overflows');

 it('under-flows');

 it('pops the same one pushed');

 it('pops the same two pushed');

 it('accepts only positive capacity');

});


