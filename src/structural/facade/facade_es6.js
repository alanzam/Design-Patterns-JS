class MemoryRepo {
  constructor() {
  }

  getObject(id) {
    throw "Not Implemented";
  }

  addOrUpdateObject(object) {
    throw "Not Implemented";
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

export { MemoryRepo, DataObject };
