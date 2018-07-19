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
