import {
  STACK_OVERFLOW_ERROR,
  STACK_UNDERFLOW_ERROR,
  NEGATIVE_CAPACITY_ERROR
} from './stack-errors';

export class Stack {
  //DEFAULT_CAPACITY = 3;
  constructor() {
    this.stackArray = [];
    this.capacity = 3; //this.DEFAULT_CAPACITY;
  }

  isEmpty() {
    return this.stackArray.length === 0;
  }

  size() {
    return this.stackArray.length;
  }

  getCapacity() {
    return this.capacity;
  }

  push(value) {
    if (this.stackArray.length >= this.capacity) {
      throw new Error(STACK_OVERFLOW_ERROR);
    }
    this.stackArray.push(value);
  }

  pop() {
    if (this.stackArray.length <= 0) {
      throw new Error(STACK_UNDERFLOW_ERROR);
    }
    return this.stackArray.pop();
  }

  setCapacity(value) {
    if (value <= 0) throw new Error(NEGATIVE_CAPACITY_ERROR);
    this.capacity = value;
  }
}
