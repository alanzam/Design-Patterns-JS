const expect = require('chai').expect;
import { EuropeDinner, USADinner, MexicanDinner, Dinner } from '../src/behavioral/template/template_es6';


describe('template tests', () => {
    it('dinner prices', () => {
        const streetDinner = new Dinner(100, 10);
        expect(streetDinner.calculatePrice()).to.equal(100);
        expect(streetDinner.getPriceByClient()).to.equal(10);

        const mexicanDinner = new MexicanDinner(100, 10);
        expect(mexicanDinner.calculatePrice()).to.equal(116);
        expect(mexicanDinner.getPriceByClient()).to.equal(11.6);

        const usaDinner = new USADinner(100, 10);
        expect(usaDinner.calculatePrice()).to.equal(120);
        expect(usaDinner.getPriceByClient()).to.equal(12);

        const europeDinner = new EuropeDinner(100, 10);
        expect(europeDinner.calculatePrice()).to.equal(144);
        expect(europeDinner.getPriceByClient()).to.equal(14.4);
    });
});
