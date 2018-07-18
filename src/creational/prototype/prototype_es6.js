class Enemy {
    constructor(life, armor) {
        this.life = life;
        this.armor = armor;
    }

    attacked(pwr) {
      this.life -= pwr;
    }

    clone() {
        return new Enemy(this.life, this.armor);
    }
}

export default Enemy;
