class Rat {
  constructor(name) {
    this.name = name;
  }

  unitedRats = [];

  unite(otherRat) {
    if (otherRat.constructor.name === "Rat") {
      this.unitedRats.push(otherRat);
    }
  }

  getRats() {
    return this.unitedRats;
  }

  toString() {
    if (this.unitedRats.length == 0) {
      return this.name;
    } else {
      console.log(this.name);
      return this.unitedRats.forEach((el) => {
        console.log(`##${el.name}`);
      });
    }
  }
}

//example

// let firstRat = new Rat("Peter");
// console.log(firstRat.toString()); // Peter
 
// console.log(firstRat.getRats()); // []

// firstRat.unite(new Rat("George"));
// firstRat.unite(new Rat("Alex"));
// console.log(firstRat.getRats());
// // [ Rat { name: 'George', unitedRats: [] },
// //  Rat { name: 'Alex', unitedRats: [] } ]

// console.log(firstRat.toString());
// // Peter
// // ##George
// // ##Alex
