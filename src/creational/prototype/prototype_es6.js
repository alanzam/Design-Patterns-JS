class Enemy {
    constructor(life, armor) {
        this.life = life;
        this.armor = armor;
    }

    attacked(pwr) {
      this.life -= pwr;
    }

    clone() {
        throw "Not Implemented";
    }
}

export default Enemy;
