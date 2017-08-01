import {STACK_OVERFLOW_ERROR, STACK_UNDERFLOW_ERROR, NEGATIVE_CAPACITY} from './stack-errors';

let makeStack = () => {
  const stackArray = [];
  let capacity = 3;
  return {
    isEmpty: () => stackArray.length === 0,
    size: () => stackArray.length,
    getCapacity: () => capacity,
    push: (value) => {
      if (stackArray.length >= capacity) {
        throw new Error(STACK_OVERFLOW_ERROR);
      }
      stackArray.push(value);
    },
    pop: () => {
      if (stackArray.length <= 0) {
        throw new Error(STACK_UNDERFLOW_ERROR);
      }
      return stackArray.pop();
    },
    setCapacity: (value) => {
      if (value <= 0) throw new Error(NEGATIVE_CAPACITY);
      capacity = value;
    }
  };
};

export {makeStack};
