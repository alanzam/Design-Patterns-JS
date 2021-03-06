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

  generateLandscape() {
    for (let i = 0; i < 2; i++) {
      this.shapes.push(new Circle(10))
    }
    for (let i = 2; i < 5; i++) {
      this.shapes.push(new Square(2))
    }
    for (let i = 5; i < 8; i++) {
      this.shapes.push(new Rect(2, 4))
    }
    for (let i = 8; i < 10; i++) {
      this.shapes.push(new Triangle(5, 3))
    }
  }

  getLandscapeArea(areaVisitor) {
    let area = 0;
    this.shapes.forEach(e => {
        area += e.acceptVisitor(areaVisitor);
    });
    return area;
  }

  getLandscapeShapes() {
    return this.shapes;
  }
}


class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  acceptVisitor(visitor) {
    return visitor.getCircleArea(this);
  }
  getRadius() {
    return this.radius;
  }
}

class Square{
  constructor(width) {
    this.width = width;
  }
  acceptVisitor(visitor) {
    return visitor.getSquareArea(this);
  }
  getWidth() {
    return this.width;
  }
}

class Rect{
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  acceptVisitor(visitor) {
    return visitor.getRectArea(this);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
}

class Triangle{
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
  acceptVisitor(visitor) {
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
