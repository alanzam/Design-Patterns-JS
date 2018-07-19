const expect = require('chai').expect;
import { TimeMachine, Memento } from '../src/behavioral/memento/memento_es6';


describe('memento tests', () => {
    it('Terminator Timemachine', () => {
        const timeMachine = new TimeMachine();
        const killTerminator = new Memento("Terminator Destroyed", true);
        const killSarahConnor = new Memento("Sarah Connor Dead", false);
        const saveSarahConnor = new Memento("Sarah Connor Saved", true);
        const createSkynet = new Memento("SkyNet Created", false);
        const killJohnConnor = new Memento("John Connor Dead", false);
        const saveJohnConnor = new Memento("John Connor Saved", true);
        timeMachine.addEvent(killTerminator);
        expect(timeMachine.allGood()).to.equal(true);
        timeMachine.addEvent(killSarahConnor);
        expect(timeMachine.allGood()).to.equal(false);
        timeMachine.addEvent(saveJohnConnor);
        expect(timeMachine.allGood()).to.equal(true);
        timeMachine.addEvent(createSkynet);
        expect(timeMachine.allGood()).to.equal(false);
        timeMachine.revertRecentEvent();
        expect(timeMachine.allGood()).to.equal(true);
        expect(timeMachine.getRecentEvent()).to.equal("John Connor Saved");
        expect(timeMachine.getEventInTime(1)).to.equal("Sarah Connor Dead");
        timeMachine.restartHistory(0);
        expect(timeMachine.getRecentEvent()).to.equal("Terminator Destroyed");
        timeMachine.addEvent(saveSarahConnor);
        expect(timeMachine.getRecentEvent()).to.equal("Sarah Connor Saved");
        expect(timeMachine.allGood()).to.equal(true);
    });
});
