const expect = require('chai').expect;
import { AreaVisitor, Landscape, Circle, Square, Rect, Triangle } from '../src/behavioral/visitor/visitor_es6';


describe('visitor tests', () => {
    it('landscape area', () => {
        const landScape = new Landscape();
        landScape.generateLandscape();
        const shapes = landScape.getLandscapeShapes();
        let area = 0;
        shapes.forEach(shape => {
            if (shape instanceof Circle)
              area += Math.pow(shape.getRadius(), 2) * 3.1416;
            if (shape instanceof Square)
              area += Math.pow(shape.getWidth(), 2);
            if (shape instanceof Rect)
              area += shape.getHeight() * shape.getWidth();
            if (shape instanceof Triangle)
              area += (shape.getBase() * shape.getHeight()) / 2;
        });
        const visitor = new AreaVisitor();
        expect(landScape.getLandscapeArea(visitor)).to.equal(area);
    });
});
