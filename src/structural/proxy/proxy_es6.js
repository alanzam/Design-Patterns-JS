class Car {
    drive() {
        return "driving";
    };
}

class CarProxy {
    constructor(driver) {
      this.driver = driver;
    }
    drive() {
        if (this.driver.age >= 16)
          return new Car().drive();
        return "too young to drive";
    };
}

class Driver {
    constructor(age) {
        this.age = age;
    }
}

export { Car, CarProxy, Driver };
