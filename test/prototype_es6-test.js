const expect = require('chai').expect;
import Enemy from '../src/creational/prototype/prototype_es6';

describe('prototype_es6 test', () => {
    it('Clone enemy test', () => {
        let enemy = new Enemy(100, 20);
        let enemy2 = enemy.clone();
        expect(enemy2.life).to.equal(100);
        expect(enemy2.armor).to.equal(20);
        expect(enemy2).to.be.instanceOf(Enemy);
        expect(enemy2===enemy).to.be.false;
        enemy.attacked(20);
        let enemy3 = enemy.clone();
        expect(enemy3).to.be.instanceOf(Enemy);
        expect(enemy3===enemy).to.be.false;
        expect(enemy3.life).to.equal(80);
        expect(enemy2.life).to.equal(100);
    });
});
