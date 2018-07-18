class RoundHole {
  constructor(radius) {
    this.radius = radius;
  }

  fits(object) {
    if (!(object instanceof RoundObject))
        throw "Not a round object";
    return this.radius >= object.getRadius();
  }

}

class RoundObject {
  constructor(radius) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }
}

class SquareObject {
  constructor(width) {
    this.width = width;
  }

  getWidth() {
    return this.width;
  }
}

class RoundSquareAdapter extends RoundObject {
    constructor(square) {
      super();
      this.square = square;
    }

    getRadius() {
      return Math.sqrt(2 * Math.pow(this.square.getWidth(), 2)) / 2;
    }
}

export { RoundSquareAdapter, SquareObject, RoundObject, RoundHole };
