function solve(input) {
  let completeInfo = input;
  let arr = [];
  let bottles = [];

  completeInfo.forEach((element) => {
    let lineInfo = element.split(" => ");
    let [juice, amount] = lineInfo;
    let current = {
      juice,
      amount: Number(amount),
    };

    let found = arr.find((x) => x.juice === juice);

    if (!found) {
      arr.push(current);
      if (current.amount >= 1000) {
        bottles.push(current);
      }
    } else {
      found.amount += current.amount;
      if (found.amount >= 1000) {
        if (!bottles.includes(found)) {
          bottles.push(found);
        }
      }
    }
  });
  bottles.forEach((el) => {
    console.log(`${el.juice} => ${Math.floor(el.amount / 1000)}`);
  });
}

//example input

solve([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
