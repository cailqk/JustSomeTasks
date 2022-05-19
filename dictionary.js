function main(input) {
  let textArr = input.split(" ");
  let dictionary = [];

  for (let i = 0; i < textArr.length; i++) {
    let word = textArr[0];
    textArr.shift();
    let found = textArr.find((el) => el === word);

    if (found) {
      if (!dictionary.includes(found)) {
        dictionary.push(found);
      }
    }
  }

  if (dictionary.length > 0) {
    console.log(dictionary.sort().join(" "));
  } else {
    console.log("NA");
  }
}

main("cat batman latt matter");
