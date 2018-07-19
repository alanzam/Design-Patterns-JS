const expect = require('chai').expect;

import { CarValet, Driver }  from '../src/structural/proxy/proxy_es6';

describe('proxy es6 tests', () => {

    it('proxy Car driver test', () => {
        const driver = new Driver(2);
        const drunkDriver = new Driver(20);

        let car = new CarValet(driver);
        expect(car.drive()).to.equal('driving');

        car = new CarValet(drunkDriver);
        expect(car.drive()).to.equal("you're drunk, get Uber");
    });

});
