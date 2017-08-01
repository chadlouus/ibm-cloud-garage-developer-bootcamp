import {STACK_OVERFLOW_ERROR, STACK_UNDERFLOW_ERROR, NEGATIVE_CAPACITY} from './stack-errors';

let StackConst = () => {
  const stackArray = [];
  let capacity = 3;
  const isEmpty = () => stackArray.length === 0;
  const size = () => stackArray.length;
  const getCapacity = () => capacity;
  const push = (value) => {
        if (stackArray.length >= capacity) {
          throw new Error(STACK_OVERFLOW_ERROR);
        }
        stackArray.push(value);
      };
  const pop = () => {
        if (stackArray.length <= 0) {
          throw new Error(STACK_UNDERFLOW_ERROR);
        }
        return stackArray.pop();
      };
  const setCapacity = (value) => {
        if (value <= 0) throw new Error(NEGATIVE_CAPACITY);
        capacity = value;
      };
  return {
    isEmpty,
    size,
    getCapacity,
    push,
    pop,
    setCapacity
  };
};

export {StackConst};
