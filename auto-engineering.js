function solve(input) {
  let allCars = input;
  let final = [];

  allCars.forEach((el) => {
    [brand, model, count] = el.split(" | ");

    let currentCar = {
      brand,
      model,
      count,
    };

    let found = final.find((el) => el.hasOwnProperty(currentCar.brand));

    if (!found) {
      final.push({ [brand]: [{ model, count }] });
    } else {
      for (const e in found) {
        let x = false;
        found[e].forEach((el) => {
          if (el.model == model) {
            el.count = Number(el.count) + Number(count);
            x = true;
          }
        });
        if (x == false) {
          found[brand].push({ model, count });
        }
      }
    }
  });

  final.forEach((el) => {
    for (let x in el) {
      console.log(x);
      el[x].forEach((j) => {
        console.log(`###${j.model} -> ${j.count}`);
      });
    }
  });
}

//example

// solve([
//   "Mercedes-Benz | 50PS | 123",
//   "Mini | Clubman | 20000",
//   "Mini | Convertible | 1000",
//   "Mercedes-Benz | 60PS | 3000",
//   "Hyunday | Elantra GT | 20000",
//   "Mini | Countryman | 100",
//   "Mercedes-Benz | W210 | 100",
//   "Mini | Clubman | 1000",
//   "Mercedes-Benz | W163 | 200",
// ]);

solve([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
