class Interface { //Interface
  helloWorld() {
    throw "Not Implemented";
  }
}

class Singleton {
    constructor() {
        if (typeof Singleton.instance === 'object') {
            return Singleton.instance;
        }
        Singleton.instance = this;
        return this;
    }

}

class Class extends Interface {
  constructor() {
    super();
  }

  helloWorld() {
    return "Hi";
  }
}

export { Class, Interface, Singleton };
