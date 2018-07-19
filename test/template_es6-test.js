const expect = require('chai').expect;
import { EuropeDinner, USADinner, MexicanDinner, Dinner } from '../src/behavioral/template/template_es6';


describe('template tests', () => {
    it('dinner prices', () => {
        const streetDinner = new Dinner(100, 10);
        expect(streetDinner.calculatePrice()).to.equal(100);

        const mexicanDinner = new MexicanDinner(100, 10);
        expect(mexicanDinner.calculatePrice()).to.equal(116);

        const usaDinner = new USADinner(100, 10);
        expect(usaDinner.calculatePrice()).to.equal(120);
        
        const europeDinner = new EuropeDinner(100, 10);
        expect(europeDinner.calculatePrice()).to.equal(144);
    });
});
