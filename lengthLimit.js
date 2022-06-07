class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
  }

  increase(length) {
    return (this.innerLength += length);
  }
  decrease(length) {
    if (this.innerLength - length < 0) {
      return (this.innerLength = 0);
    } else {
      return (this.innerLength -= length);
    }
  }
  toString() {
    if (this.innerLength == 0) {
      return "...";
    }
    if (this.innerString.length > this.innerLength) {
      return (
        this.innerString.substring(0, this.innerLength) +
        ".".repeat(this.innerString.length - this.innerLength) //doing this so the number of dots equals the number of missing letters from the original string.
      );
    }
    return this.innerString;
  }
}

// example

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te..

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
