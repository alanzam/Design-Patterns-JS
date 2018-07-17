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

export { RoundSquareAdapter, SquareObject, RoundObject, RoundHole };
