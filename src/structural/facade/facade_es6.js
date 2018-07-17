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
