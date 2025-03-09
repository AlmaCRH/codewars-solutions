/* Your task will be to implement an object (class) that mimics the array object, but should not actually be an Array. You are otherwise free to choose your own implementation.

The object shall be named List and shall have the methods push, pop, shift, unshift and filter defined on its prototype. Each of these methods should behave exactly as their Array counterpart does. (It is acceptable for filter to return a List or an Array.)
The List constructor must take an arbitrary number of arguments as initial values for your list.
Furthermore, your list should have a length property that dynamically changes as your list changes. */

class List {
  constructor(...theArgs) {
    this.length = theArgs.length;
    for (let i = 0; i < theArgs.length; i++) {
      this[i] = theArgs[i];
    }
    return this;
  }

  push(...x) {
    for (let i = 0; i < x.length; i++) {
      this[this.length] = x[i];
      this.length = Object.values(this).length - 1;
    }

    return this.length;
  }

  pop() {
    const temp = this[this.length - 1];
    delete this[this.length - 1];
    this.length = Object.values(this).length - 1;
    return temp;
  }

  shift() {
    const temp = this[0];
    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }
    delete this[this.length - 1];
    this.length = Object.values(this).length - 1;
    return temp;
  }

  unshift(...x) {
    let temp = Object.values(this);
    temp.length = temp.length - 1;
    for (let i = 0; i < x.length; i++) {
      this[i] = x[i];
    }
    for (let i = 0; i < temp.length; i++) {
      this[i + x.length] = temp[i];
    }
    this.length = Object.values(this).length - 1;
    return this.length;
  }

  filter(callback) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        temp[temp.length] = this[i];
      }
    }
    return temp;
  }
}
