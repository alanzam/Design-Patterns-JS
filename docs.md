# Design Patterns JS

**[Behavioral](#behavioral)**
* [Chain Of Resp](#chain-of-resp)
* [Command](#command)
* [Iterator](#iterator)
* [Mediator](#mediator)
* [Memento](#memento)
* [Observer](#observer)
* [State](#state)
* [Strategy](#strategy)
* [Template](#template)
* [Visitor](#visitor)

**[Creational](#creational)**
* [Abstract Factory](#abstract-factory)
* [Builder](#builder)
* [Factory Method](#factory-method)
* [Prototype](#prototype)
* [Singleton](#singleton)

**[Structural](#structural)**
* [Adapter](#adapter)
* [Decorator](#decorator)
* [Facade](#facade)
* [Flyweight](#flyweight)
* [Proxy](#proxy)



## behavioral
### Chain Of Resp
##### chain-of-resp-es6.js
```Javascript
class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(p) {
        this.products.push(p);
    };
}

class Discount {
    calc(products) {
        let ndiscount = new NumberDiscount();
        let pdiscount = new PriceDiscount();
        let none = new NoneDiscount();
        ndiscount.setNext(pdiscount);
        pdiscount.setNext(none);
        return ndiscount.exec(products);
    };
}

class NumberDiscount {
    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    };

    exec(products) {
        let result = 0;
        if (products.length > 3)
            result = 0.05;

        return result + this.next.exec(products);
    };
}

class PriceDiscount{
    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    };

    exec(products) {
        let result = 0;
        let total = products.reduce((a, b)=> a + b);

        if (total >= 500)
            result = 0.1;

        return result + this.next.exec(products);
    };
}

class NoneDiscount {
    exec() {
        return 0;
    };
}

export { ShoppingCart , Discount };

```

### Command
##### command_es6.js
```Javascript
class Player {
  constructor() {
    this.beats = [];
  }

  playSong() {
    let song = "";
    this.beats.forEach(function(beat) {
        song += beat.loop();
    });
    return song;
  }

  getDuration() {
    let duration = 0;
    this.beats.forEach(function(beat) {
        duration += beat.getTime();
    });
    return duration;
  }

  addCube(cube) {
    this.beats.push(cube);
  }

}

class BeatCube {
  constructor(beat, time) {
    this.beat = beat;
    this.time = time !== undefined ? time : 1;
  }

  demoPlay() {
    return this.beat.play();
  }

  loop() {
    let loop = "";
    for (let i = 0; i < this.time; i++)
      loop += this.beat.play();
    return loop;
  }

  getTime() {
    return this.time;
  }
}

class HipHopBeat {
  play() {
    return "O------X--O----X";
  }
}

class RockBeat {
  play() {
    return "O-X-O-X-O-X-O-X-";
  }
}

class DiscoBeat {
  play() {
    return "O - X - O - X - ";
  }
}

class ReggaeBeat {
  play() {
    return "O - - - X - - - O";
  }
}


export { Player, BeatCube, HipHopBeat, DiscoBeat, RockBeat, ReggaeBeat };

```

### Iterator
##### iterator_es6.js
```Javascript
class FacebookContact {
  constructor(isFriend) {
    this.isFriend = isFriend ? true : false;
  }
}

class FacebookFriend extends FacebookContact {
  constructor() {
    super(true);
  }
}

class Facebook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }
}

class FriendSearch {
    constructor(contacts) {
        this.index = 0;
        this.contacts = contacts;
    }

    next() {
        while (this.hasNext()) {
          const nextContact = this.contacts[this.index++];
          if (nextContact.isFriend)
            return nextContact;
        }
        return undefined;
    }

    hasNext() {
        return this.index < this.contacts.length;
    }
}

class ContactSearch {
    constructor(contacts) {
        this.index = 0;
        this.contacts = contacts;
    }

    next() {
        return this.contacts[this.index++];
    }

    hasNext() {
        return this.index < this.contacts.length;
    }
}

export {FacebookFriend, FacebookContact, Facebook, FriendSearch, ContactSearch};

```

### Mediator
##### mediator_es6.js
```Javascript
class TrafficTower {
    constructor() {
        this.airplanes = [];
    }

    requestPositions() {
        return this.airplanes.map(airplane => {
            return airplane.position;
        });
    }
}

class Airplane{
    constructor(position, trafficTower) {
        this.position = position;
        this.trafficTower = trafficTower;
        this.trafficTower.airplanes.push(this);
    }

    requestPositions() {
        return this.trafficTower.requestPositions();
    }
}


export { TrafficTower, Airplane };

```

### Memento
##### memento_es6.js
```Javascript
class Memento {
    constructor(event, goodEvent) {
      this.event = event;
      this.allGood = goodEvent;
    }
}

class TimeMachine {
    constructor() {
        this.worldStates = [];
        this.currentEvent = -1;
    }

    addEvent(memento) {
        this.currentEvent++;
        if (this.currentEvent > this.worldStates.length - 1)
          this.worldStates.push(memento);
        else
          this.worldStates[this.currentEvent] = memento;
    }

    allGood() {
      if (this.currentEvent < 0) return false;
      return this.worldStates[this.currentEvent].allGood;
    }

    revertRecentEvent() {
        if (this.currentEvent < 0) return;
        this.worldStates.pop();
        this.currentEvent--;
    }

    restartHistory(from) {
      if (this.currentEvent < 0)
        this.currentEvent = -1;
      else
        this.currentEvent = from;
    }

    getRecentEvent() {
      if (this.currentEvent < 0) return "Nothing";
      return this.worldStates[this.currentEvent].event;
    }

    getEventInTime(epoch) {
        try {
          return this.worldStates[epoch].event;
        } catch (e) {
          return "TimeEvent out of bounds";
        }

    }
}

export { TimeMachine, Memento };

```

### Observer
##### observer_es6.js
```Javascript
class Twitter {
    constructor() {
        this.followers = [];
    }

    register(observer) {
        this.followers.push(observer);
    }

    unregister(observer) {
        this.followers = this.followers.filter(function(el) {
            return el !== observer;
        });
    }

    tweet(message) {
        return this.followers.forEach(function(el) {
            el.readTweet(message);
        }.bind(this));
    }
}

class Follower {
    constructor() {
      this.readMessages = [];
    }
    readTweet(tweet) {
      this.readMessages.push(tweet);
    }
    getReadMessages() {
      return this.readMessages;
    }
}

class TwitStar {
    constructor(twitter) {
      this.twitter = twitter;
    }
    publishTweet(message) {
      this.twitter.tweet(message);
    }
}

export { TwitStar, Follower, Twitter };

```

### State
##### state_es6.js
```Javascript
class ReadyState {
  constructor(player) {
    this.player = player;
  }

  clickPlay() {
    this.player.changeState(new PlayingState(this.player));
  }

  clickPause() {

  }

  clickStop() {

  }

  clickClose() {
    this.player.changeState(new CloseState(this.player));
  }

  renderScreen() {
    return "Hello";
  }

}

class PlayingState extends ReadyState{
  constructor(player) {
    super(player);
  }

  clickPause() {
    this.player.changeState(new PauseState(this.player));
  }

  clickStop() {
    this.player.changeState(new ReadyState(this.player));
  }

  renderScreen() {
    return "Playing";
  }

}

class PauseState extends ReadyState{
  constructor(player) {
    super(player);
  }

  clickPlay() {
    this.player.changeState(new PlayingState(this.player));
  }

  clickStop() {
    this.player.changeState(new ReadyState(this.player));
  }

  renderScreen() {
    return "...";
  }

}

class CloseState extends ReadyState {
  constructor(player) {
    super(player);
  }

  clickPlay() {

  }

  clickPause() {

  }

  clickStop() {

  }

  clickClose() {

  }

  renderScreen() {
    return "Goodbye"
  }

}

class Winamp {
  constructor() {
    this.state = new ReadyState(this);
  }

  changeState(state) {
    this.state = state;
  }

  clickPlay() {
    this.state.clickPlay();
  }

  clickPause() {
    this.state.clickPause();
  }

  clickStop() {
    this.state.clickStop();
  }

  clickClose() {
    this.state.clickClose();
  }

  renderScreen() {
    return this.state.renderScreen();
  }

}

export { ReadyState, PlayingState, PauseState, CloseState, Winamp };

```

### Strategy
##### strategy_es6.js
```Javascript
class GoogleMaps {
    constructor(strategy, destination) {
        this.destination = destination;
        this.strategy = strategy;
    }

    getEstimateTime() {
        return this.strategy(this.destination);
    }

    getDistance() {
        this.destination.distance;
    }
}

class Destination {
    constructor(start, end) {
      this.distance = end - start;
    }
}

function avoidHighway_Tolls(destination) {
    return (destination.distance * 3) / 60;
}

function avoidTolls(destination) {
    return (destination.distance * 1.5) / 60;
}

function avoidHighway(destination) {
    return (destination.distance * 2.5) / 60;
}

function defaultRoute(destination) {
    return destination.distance / 60;
}

export { Destination, GoogleMaps, avoidTolls, avoidHighway, avoidHighway_Tolls, defaultRoute };

```

### Template
##### template_es6.js
```Javascript
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
    this.tip = clients >= 10 ? this.price * 0.2 : 0;
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

```

### Visitor
##### visitor_es6.js
```Javascript
//Get shape Area bonusVisitor

class BadAreaVisitor {
  constructor() {

  }

  getCircleArea(circle) {
    if (!(circle instanceof Circle))
      throw "Not a Circle";
    return Math.pow(circle.getRadius(), 2) * 3.1416;
  }

  getSquareArea(square) {
    if (!(square instanceof Square))
      throw "Not a Circle";
    return Math.pow(square.getWidth(), 2);
  }

  getRectArea(rect) {
    if (!(rect instanceof Rectangle))
      throw "Not a Circle";
    return rect.getHeight() * rect.getWidth();
  }

  getTriangleArea(triangle) {
    if (!(triangle instanceof Triangle))
      throw "Not a Circle";
    return (triangle.getBase() * triangle.getHeight()) / 2;
  }
}

class AreaVisitor {
  constructor() {

  }

  getCircleArea(circle) {
    return Math.pow(circle.getRadius(), 2) * 3.1416;
  }

  getSquareArea(square) {
    return Math.pow(square.getWidth(), 2);
  }

  getRectArea(rect) {
    return rect.getHeight() * rect.getWidth();
  }

  getTriangleArea(triangle) {
    return (triangle.getBase() * triangle.getHeight()) / 2;
  }

}

class Landscape {
  constructor() {
    this.shapes = [];
  }

  generateLandscape() {
    for (let i = 0; i < 2; i++) {
      this.shapes.push(new Circle(10))
    }
    for (let i = 2; i < 5; i++) {
      this.shapes.push(new Square(2))
    }
    for (let i = 5; i < 8; i++) {
      this.shapes.push(new Rect(2, 4))
    }
    for (let i = 8; i < 10; i++) {
      this.shapes.push(new Triangle(5, 3))
    }
  }

  getLandscapeArea(areaVisitor) {
    let area = 0;
    this.shapes.forEach(e => {
        area += e.getArea(areaVisitor);
    });
    return area;
  }

  getLandscapeShapes() {
    return this.shapes;
  }
}


class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea(visitor) {
    return visitor.getCircleArea(this);
  }
  getRadius() {
    return this.radius;
  }
}

class Square{
  constructor(width) {
    this.width = width;
  }
  getArea(visitor) {
    return visitor.getSquareArea(this);
  }
  getWidth() {
    return this.width;
  }
}

class Rect{
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea(visitor) {
    return visitor.getRectArea(this);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
}

class Triangle{
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
  getArea(visitor) {
    return visitor.getTriangleArea(this);
  }
  getBase() {
    return this.base;
  }
  getHeight() {
    return this.height;
  }
}

export { AreaVisitor, Landscape, Circle, Square, Rect, Triangle };

```


## creational
### Abstract Factory
##### abstract-factory_es6.js
```Javascript

class GuiFactory {
  constructor() {
  }

  renderBtn() {
    return this.Btn.render();
  }

  renderTitle() {
    return this.Title.render();
  }

  onClick() {
    return "Hi";
  }
}

class IBtn {
    render() {
        throw "Not Implemented";
    }
}

class ITitle {
    render() {
        throw "Not Implemented";
    }
}

class WinBtn extends IBtn {
  render() {
    return "<win>Button</win>"
  }
}

class MacBtn extends IBtn {
  render() {
    return "<mac>Button</mac>"
  }
}

class WinFactory extends GuiFactory {
  constructor() {
    super();
    this.Btn = new WinBtn();
  }
}

class MacFactory extends GuiFactory {
  constructor() {
    super();
    this.Btn = new MacBtn();
  }
}

export { GuiFactory, WinFactory, MacFactory };

```

### Builder
##### builder_es6.js
```Javascript
class Request {
    constructor() {
        this.url = '';
        this.method = '';
        this.payload = {};
    }
}

class IBuilder {
    constructor() {
    }

    forUrl(url) {
      throw "Not Implemented";
    }

    useMethod(method) {
      throw "Not Implemented";
    }

    payload(payload) {
      throw "Not Implemented";
    }

}

class RequestBuilder extends IBuilder {
    constructor() {
      super();
      this.Request = new Request();
    }

    forUrl(url) {
      this.Request.url = url;
      return this;
    }

    useMethod(method) {
      this.Request.method = method;
      return this;
    }

    payload(payload) {
      this.Request.payload = payload;
      return this;
    }

    build() {
      return this.Request;
    }

}

class DocBuilder extends IBuilder {
    constructor() {
      super();
      this.docUrl = "";
      this.methodUrl = "";
      this.payloadUrl = "";
    }

    forUrl(url) {
      this.docUrl = url;
      return this;
    }

    useMethod(method) {
      this.methodUrl = method;
      return this;
    }

    payload(payload) {
      this.payloadUrl= payload;
      return this;
    }

    build() {
      return `<url>${this.docUrl}</url><method>${this.methodUrl}</method><payload>${this.payloadUrl}</payload>`;
    }

}


export { RequestBuilder, DocBuilder, IBuilder, Request };

```

### Factory Method
##### factory-method_es6.js
```Javascript
class Employee {
  constructor(employeeId) {
    this.employeeId = employeeId;
  }
}

class IFactory {
  constructor() {
  }

  findOrCreate(id) {
    throw "Not implemented"
  }

}


class EmployeeFactory extends IFactory{
  constructor() {
    super();
    this.employees = {};
  }

  findOrCreate(id) {
    if (this.employees[id] === undefined)
      this.employees[id] = new Employee(id);
    return this.employees[id];
  }

  getNumberOfEmployees() {
      return Object.keys(this.employees).length;
  }

}

export { EmployeeFactory, Employee };

```

### Prototype
##### prototype_es6.js
```Javascript
class Enemy {
    constructor(life, armor) {
        this.life = life;
        this.armor = armor;
    }

    attacked(pwr) {
      this.life -= pwr;
    }

    clone() {
        return new Enemy(this.life, this.armor);
    }
}

export default Enemy;

```

### Singleton
##### singleton_es6.js
```Javascript
class DbConnection {
    constructor() {
        if (typeof DbConnection.instance === 'object') {
            return DbConnection.instance;
        }
        this.Connstring = "connection1";
        this.connected = false;
        DbConnection.instance = this;
        return this;
    }

    getStatus() {
      return this.connected;
    }

    connect() {
      this.connected = true;
    }

    changeConnection(connString) {
      this.Connstring = connString;
    }

    getConnection() {
      return this.Connstring;
    }

}

export default DbConnection;

```


## structural
### Adapter
##### adapter_es6.js
```Javascript
class RoundHole {
  constructor(radius) {
    this.radius = radius;
  }

  fits(object) {
    if (!(object instanceof RoundObject))
        throw "Not a round object";
    return this.radius >= object.getRadius();
  }

}

class RoundObject {
  constructor(radius) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }
}

class SquareObject {
  constructor(width) {
    this.width = width;
  }

  getWidth() {
    return this.width;
  }
}

class RoundSquareAdapter extends RoundObject {
    constructor(square) {
      super();
      this.square = square;
    }

    getRadius() {
      return Math.sqrt(2 * Math.pow(this.square.getWidth(), 2)) / 2;
    }
}

export { RoundSquareAdapter, SquareObject, RoundObject, RoundHole };

```

### Decorator
##### decorator_es6.js
```Javascript
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

class DataSource {
  constructor() {
    this.data = null;
  }

  setData(data) {
    this.data = data;
  }

  readData() {
    //console.log('Raw Data', this.data);
    return this.data;
  }

}

class DataSourceDecorator extends DataSource {
  constructor(dataSource) {
    super();
    this.dataSource = dataSource;
  }

  setData(data) {
    this.dataSource.setData(data);
  }

  readData() {
    return this.dataSource.readData();
  }
}

class EncryptData extends DataSourceDecorator {
  constructor(dataSource) {
    super(dataSource);
  }

  setData(data) {
    const encryptedData = "XXX===" + data + "===XXX";
    super.setData(encryptedData);
  }

  readData() {
    let encryptedData = super.readData();
    return replaceAll(replaceAll(encryptedData, "XXX===" , ""), "===XXX", "");
  }
}

class CompressData extends DataSourceDecorator {
  constructor(dataSource) {
    super(dataSource);
  }

  setData(data) {
    const compressdata = replaceAll(data, "XXX" , "x");
    super.setData(compressdata);
  }

  readData() {
    let compressdata = super.readData();
    return replaceAll(compressdata, "x" , "XXX")
  }
}

export { DataSource, DataSourceDecorator, EncryptData, CompressData };

```

### Facade
##### facade_es6.js
```Javascript
class MemoryRepo {
  constructor() {
    this.internalData = new InMemory();
  }

  getObject(id) {
    const obj = this.internalData.getObject(id);
    if (obj === undefined)
      return null;
    return obj;
  }

  addOrUpdateObject(object) {
    this.internalData.addOrUpdateObj(object);
  }

}

class MemoryDbRepo {
  constructor() {
    this.dbData = new DbMemory();
  }

  getObject(id) {
    try {
      return this.dbData.queryById(id);
    }
    catch (e) {
      if (e == "Not Connected")
         this.dbData.connect();
      try {
        return this.dbData.queryById(id);
      }
      catch (e) {
        return null;
      }
    }
  }

  addOrUpdateObject(object) {
    try {
      this.dbData.insertToDb(object);
    }
    catch (e) {
      if (e == "Not Connected")
         this.dbData.connect();
      try {
        this.dbData.insertToDb(object);
      }
      catch (e) {
        this.dbData.updateObject(object);
      }
    }
  }
}

class InMemory {
  constructor() {
    this.data = {};
  }

  addOrUpdateObj(object) {
    this.data[object.id] = object;
  }

  getObject(id) {
    return this.data[id];
  }

}

class DbMemory {
  constructor() {
    this.connected = false;
    this.db = {};
  }

  connect() {
    this.connected = true;
  }

  queryById(id) {
    if (!this.connected)
      throw "Not Connected";
    if (this.db[id] === undefined)
      throw "Not found";
    return this.db[id];
  }

  insertToDb(object) {
    if (!this.connected)
      throw "Not Connected";
    if (this.db[object.id] !== undefined)
      throw "Duplicate";
    this.db[object.id] = object;
  }

  updateObject(object) {
    if (!this.connected)
      throw "Not Connected";
    if (this.db[object.id] === undefined)
      throw "Not found";
    this.db[object.id] = object;
  }

}

class DataObject {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

export { MemoryRepo, MemoryDbRepo, DbMemory, InMemory, DataObject };

```

### Flyweight
##### flyweight_es6.js
```Javascript
class TreeType {
    constructor(type, color, texture){
      this.type = type;
      this.color = color;
      this.texture = texture;
    }

    getSize() {
      return roughSizeOfObject(this);
    }
}

class ShallowTree {
    constructor(treeType, height){
      this.treeType = treeType.type;
      this.height = height;
    }
    render(treeType) {
      return `${this.height} - ${treeType.color} - ${treeType.texture}`;
    }
    getSize() {
      return roughSizeOfObject(this);
    }
}

class DeepTree {
    constructor(treeType, height){
      this.treeType = treeType;
      this.height = height;
    }
    render() {
      return `${this.height} - ${this.treeType.color} - ${this.treeType.texture}`;
    }
    getSize() {
      return roughSizeOfObject(this);
    }
}

class ShallowforestFactory {
    constructor(){
      this.treeTypes = {};
      this.trees = [];
    }
    addTrees(treeType, count) {
      if (this.treeTypes[treeType.type] === undefined)
        this.treeTypes[treeType.type] = treeType;
      for (let i = 0; i <= count; i++)
        this.trees.push(new ShallowTree(treeType, i * 10));
    }
    renderForest() {
      let str = "";
      for (let i = 0; i < this.trees.length; i++)
        str += this.trees[i].render(this.treeTypes[this.trees[i].treeType]) + '\n';
      return str;
    }
    getSize() {
      let size = 0;
      for (let i = 0; i < this.trees.length; i++)
        size += this.trees[i].getSize();
      for (let i = 0; i < Object.keys(this.treeTypes).length; i++)
        size += this.treeTypes[Object.keys(this.treeTypes)[i]].getSize();
      return size;
    }
};

class DeepforestFactory {
    constructor(){
      this.trees = [];
    }
    addTrees(treeType, count) {
      for (let i = 0; i <= count; i++)
        this.trees.push(new DeepTree(treeType, i * 10));
    }
    renderForest() {
      let str = "";
      for (let i = 0; i < this.trees.length; i++)
        str += this.trees[i].render() + '\n';
      return str;
    }
    getSize() {
      let size = 0;
      for (let i = 0; i < this.trees.length; i++)
        size += this.trees[i].getSize();
      return size;
    }
};

function roughSizeOfObject( object ) {

    var objectList = [];
    var stack = [ object ];
    var bytes = 0;

    while ( stack.length ) {
        var value = stack.pop();

        if ( typeof value === 'boolean' ) {
            bytes += 4;
        }
        else if ( typeof value === 'string' ) {
            bytes += value.length * 2;
        }
        else if ( typeof value === 'number' ) {
            bytes += 8;
        }
        else if
        (
            typeof value === 'object'
            && objectList.indexOf( value ) === -1
        )
        {
            objectList.push( value );

            for( var i in value ) {
                stack.push( value[ i ] );
            }
        }
    }
    return bytes;
}

export { TreeType, ShallowTree, DeepTree, ShallowforestFactory, DeepforestFactory };

```

### Proxy
##### proxy_es6.js
```Javascript
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

```



