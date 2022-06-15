class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Object.defineProperty(this, "fullName", {
      set: function (value) {
        let [fName, lName] = value.split(" ");
        this.firstName = fName;
        this.lastName = lName;
      },

      get: function () {
        return `${this.firstName} ${this.lastName}`;
      },
    });
  }
}

//example

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
