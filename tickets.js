function tickets(arg1, arg2) {
  let ticketInfo = arg1;
  let sorter = arg2;
  let arr = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  ticketInfo.forEach((el) => {
    let [destination, price, status] = el.split("|");
    let current = new Ticket(destination, price, status);
    arr.push(current);
  });

  switch (sorter) {
    case "destination":
      arr.sort((a, b) => {
        return a.destination.localeCompare(b.destination);
      });
      break;
    case "price":
      arr.sort();
      break;
    case "status":
      arr.sort((a, b) => {
        return a.status.localeCompare(b.status);
      });
      break;
  }
  return arr;
}

tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
