//Get shape Area bonusVisitor

class BadAreaVisitor {
  constructor() {

  }

  getCircleArea(circle) {
    if (!(circle instanceof Circle))
      throw "Not a Circle";
    return Math.pow(circle.getRadius(), 2) * 3.1416;
  }

  getSquareArea(square) {
    if (!(square instanceof Square))
      throw "Not a Circle";
    return Math.pow(square.getWidth(), 2);
  }

  getRectArea(rect) {
    if (!(rect instanceof Rectangle))
      throw "Not a Circle";
    return rect.getHeight() * rect.getWidth();
  }

  getTriangleArea(triangle) {
    if (!(triangle instanceof Triangle))
      throw "Not a Circle";
    return (triangle.getBase() * triangle.getHeight()) / 2;
  }
}

class AreaVisitor {
  constructor() {

  }

  getCircleArea(circle) {
    return Math.pow(circle.getRadius(), 2) * 3.1416;
  }

  getSquareArea(square) {
    return Math.pow(square.getWidth(), 2);
  }

  getRectArea(rect) {
    return rect.getHeight() * rect.getWidth();
  }

  getTriangleArea(triangle) {
    return (triangle.getBase() * triangle.getHeight()) / 2;
  }

}

class Landscape {
  constructor() {
    this.shapes = [];
  }

  generateRandomLandscape() {
    for (let i = 0; i < 25; i++) {
      this.shapes.push()
    }
  }
}

class IShape {
  getArea(visitor) {
    throw "Not Implemented";
  }
}

class Circle extends IShape{
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea(visitor) {
    return visitor.getCircleArea(this);
  }
  getRadius() {
    return this.radius;
  }
}

class Square extends IShape{
  constructor(width) {
    super();
    this.width = width;
  }
  getArea(visitor) {
    return visitor.getSquareArea(this);
  }
  getWidth() {
    return this.width;
  }
}

class Rect extends IShape{
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea(visitor) {
    return visitor.getRectArea(this);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
}

class Triangle extends IShape{
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  getArea(visitor) {
    return visitor.getTriangleArea(this);
  }
  getBase() {
    return this.base;
  }
  getHeight() {
    return this.height;
  }
}

export { AreaVisitor, Landscape, Circle, Square, Rect, Triangle };
