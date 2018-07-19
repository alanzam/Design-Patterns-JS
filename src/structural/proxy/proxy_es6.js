class Car {
    drive() {
        return "driving";
    };
}

class CarValet {
    constructor(driver) {
      this.driver = driver;
    }
    drive() {
        if (this.driver.avgAlcohol < 0.8)
          return new Car().drive();
        return "you're drunk, get Uber";
    };
}

class Driver {
    constructor(beers) {
      this.avgAlcohol = 0.08 * beers;
    }
}

export { Car, CarValet, Driver };
