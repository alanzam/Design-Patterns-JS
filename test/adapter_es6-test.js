const expect = require('chai').expect;

import { RoundSquareAdapter, SquareObject, RoundObject, RoundHole } from '../src/structural/adapter/adapter_es6';

describe('adapter_es6 tests', () => {

    it('Round Object in Hole', () => {
        const hole = new RoundHole(10);
        const obj = new RoundObject(10);
        expect(hole.fits(obj)).to.equal(true);
    });

    it('Square Object in Hole', () => {
        const hole = new RoundHole(10);
        const obj = new SquareObject(10);
        try {
          hole.fits(obj);
        } catch (e) {
          expect(e).to.equal("Not a round object");
        }
    });

    it('Large Square Adapter Object in Hole', () => {
        const hole = new RoundHole(10);
        const obj = new SquareObject(15);
        const adapter = new RoundSquareAdapter(obj);
        expect(hole.fits(adapter)).to.equal(false);
    });


    it('Small Square Adapter Object in Hole', () => {
        const hole = new RoundHole(10);
        const obj = new SquareObject(10);
        const adapter = new RoundSquareAdapter(obj);
        expect(hole.fits(adapter)).to.equal(true);
    });

});
