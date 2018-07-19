const expect = require('chai').expect;
import { ReadyState, PlayingState, PauseState, CloseState, Winamp } from '../src/behavioral/state/state_es6';


describe('state tests', () => {
    it('Winamp Player', () => {
        const player  = new Winamp();
        expect(player.renderScreen()).to.equal("Hello");
        player.clickPlay();
        expect(player.renderScreen()).to.equal("Playing");
        player.clickPause();
        expect(player.renderScreen()).to.equal("...");
        player.clickPlay();
        expect(player.renderScreen()).to.equal("Playing");
        player.clickStop();
        expect(player.renderScreen()).to.equal("Hello");
        player.clickPause();
        expect(player.renderScreen()).to.equal("Hello");
        player.clickClose();
        expect(player.renderScreen()).to.equal("Goodbye");
        player.clickPlay();
        expect(player.renderScreen()).to.equal("Goodbye");
        player.clickPause();
        expect(player.renderScreen()).to.equal("Goodbye");
    });
});
