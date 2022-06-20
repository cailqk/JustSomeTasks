function solve(arr, symbol) {
  let array = arr;
  let toFind = symbol;
  let counter = 0;

  array.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] === toFind) {
        counter++;
      }
    }
  });
  if (counter > 0) {
    console.log(counter);
  } else {
    console.log("No matches found!");
  }
}

solve(["apple", "pilot", "tree", "fire", "rainbow"], "z");
