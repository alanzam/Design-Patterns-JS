const expect = require('chai').expect;
/*
import { DataSource, DataSourceDecorator, EncryptData, CompressData } from '../src/structural/decorator/decorator_es6';


describe('decorator es6 tests', () => {

    it('Data decorator test', () => {
        const dataSource = new DataSource();
        dataSource.setData("Data");
        expect(dataSource.readData()).to.equal("Data");

        const encryptedData = new EncryptData(dataSource);
        encryptedData.setData("Data");
        expect(encryptedData.dataSource.data).to.equal("XXX===Data===XXX");
        expect(encryptedData.readData()).to.equal("Data");

        const compressedData = new CompressData(dataSource);
        compressedData.setData("XXXDataXXX");
        expect(compressedData.dataSource.data).to.equal("xDatax");
        expect(compressedData.readData()).to.equal("XXXDataXXX");

    });

    it('Data encryptCompressData test', () => {
        const dataSource = new DataSource();
        const compressedData = new CompressData(dataSource);
        const encryptCompressData = new EncryptData(compressedData);
        encryptCompressData.setData("Data");
        expect(encryptCompressData.readData()).to.equal("Data");

    });

    it('Data compressEncryptData test', () => {
        const dataSource = new DataSource();
        const encryptedData = new EncryptData(dataSource);
        const encryptCompressData = new CompressData(encryptedData);
        encryptCompressData.setData("Data");
        expect(encryptCompressData.readData()).to.equal("Data");

    });

});
*/
