class Car {
    drive() {
        return "driving";
    };
}

class CarProxy {
    constructor(driver) {
    }
    drive() {
        throw "Not Implemented";
    };
}

class Driver {
    constructor(age) {
        this.age = age;
    }
}

export { Car, CarProxy, Driver };
