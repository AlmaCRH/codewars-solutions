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
