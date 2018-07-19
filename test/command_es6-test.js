const expect = require('chai').expect;
import { Player, BeatCube, HipHopBeat, DiscoBeat, RockBeat, ReggaeBeat } from '../src/behavioral/command/command_es6';


describe('command tests', () => {
    it('Beat Generator', () => {
        const player = new Player();
        const hipHopBeat_2 = new BeatCube(new HipHopBeat(), 2);
        const rockBeat_1 = new BeatCube(new RockBeat(), 1);
        expect(hipHopBeat_2.demoPlay()).to.equal("O------X--O----X");
        expect(hipHopBeat_2.loop()).to.equal("O------X--O----XO------X--O----X");
        player.addCube(hipHopBeat_2);
        expect(player.playSong()).to.equal("O------X--O----XO------X--O----X");
        expect(rockBeat_1.loop()).to.equal("O-X-O-X-O-X-O-X-");
        player.addCube(rockBeat_1);
        expect(player.playSong()).to.equal("O------X--O----XO------X--O----XO-X-O-X-O-X-O-X-");
        expect(player.getDuration()).to.equal(3);
    });
});
