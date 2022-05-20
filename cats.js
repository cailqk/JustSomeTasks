function cats(array) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = Number(age);
      this.meow = () => {
        console.log(`${name}, aged ${age} says Meow`);
      };
    }
  }
  let info = array;
  let infoL = info.length;

  if (infoL <= 0) {
    console.log("There are no cats!");
  } else {
    for (let i = 0; i < infoL; i++) {
      let [name, age] = info[i].split(" ");
      let cat = new Cat(name, age);
      cat.meow();
    }
  }
}

cats(["Ronnie 5", "Bucky 2", "Rocky 8", "Arnold 12", "Spot 1"]);
