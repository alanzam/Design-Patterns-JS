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
    console.log('Raw Data', this.data);
    return this.data;
  }

}

class DataSourceDecorator extends DataSource {
  constructor(dataSource) {
    super();
  }

  setData(data) {
    throw "Not Implemented";
  }

  readData() {
    throw "Not Implemented";
  }
}

class EncryptData extends DataSourceDecorator {
  constructor(dataSource) {
    super(dataSource);
  }

  setData(data) {
    throw "Not Implemented";
  }

  readData() {
    throw "Not Implemented";
  }
}

class CompressData extends DataSourceDecorator {
  constructor(dataSource) {
    super(dataSource);
  }

  setData(data) {
    throw "Not Implemented";
  }

  readData() {
    throw "Not Implemented";
  }
}

export { DataSource, DataSourceDecorator, EncryptData, CompressData };
