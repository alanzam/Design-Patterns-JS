function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

class DataSource {
  constructor() {
    this.data = null;
  }

  setData(data) {
    this.data = data;
    console.log('Setted Data', this.data);
  }

  readData() {
    console.log('Reading Data', this.data);
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
    const data = this.dataSource.readData();
    return data;
  }
}

class EncryptData extends DataSourceDecorator {
  constructor(dataSource) {
    super(dataSource);
  }

  setData(data) {
    const encryptedData = `XXX===${data}===XXX`;
    super.setData(encryptedData);
  }

  readData() {
    let encryptedData = super.readData();
    const decryptedData = replaceAll(replaceAll(encryptedData, 'XXX===',''),'===XXX','');
    return decryptedData;
  }
}

class CompressData extends DataSourceDecorator {
  constructor(dataSource) {
    super(dataSource);
  }

  setData(data) {
    const compressData = replaceAll(data, 'XXX', 'x');
    super.setData(compressData);
  }

  readData() {
    let compressData = super.readData();
    const decompressedData = replaceAll(compressData, 'x','XXX');
    return decompressedData;
  }
}

export { DataSource, DataSourceDecorator, EncryptData, CompressData };
