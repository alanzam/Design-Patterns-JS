class Dinner {
  constructor(price, clients) {
    this.price = price;
    this.clients = clients;
  }

  calculatePrice() {
    return this.price;
  }

  getClients() {
    return this.clients.length;
  }
}

class EuropeDinner extends Dinner {
  constructor(price, clients) {
    super(price, clients);
    this.tax = this.price * 0.24;
    this.tip = this.price > 50 ? this.price * 0.2 : this.price * 0.15;
  }

  calculatePrice() {
    return this.price + this.tax + this.tip;
  }
}

class USADinner extends Dinner {
  constructor(price, clients) {
    super(price, clients);
    this.tip = this.clients.length > 10 ? this.price * 0.25 : this.price * 0.12;
  }

  calculatePrice() {
    return this.price + this.tip;
  }
}

class MexicanDinner extends Dinner {
  constructor(price, clients) {
    super(price, clients);
    this.tax = this.price * 0.16;
  }

  calculatePrice() {
    return this.price + this.tax;
  }
}



export { EuropeDinner, USADinner, MexicanDinner, Dinner };
