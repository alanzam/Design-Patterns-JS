const expect = require('chai').expect;

import  { TreeType, ShallowTree, DeepTree, ShallowforestFactory, DeepforestFactory } from '../src/structural/flyweight/flyweight_es6';

describe('flyweight tests', () => {

    it('weight test', () => {
        const deepForest = new DeepforestFactory();
        const shallowForest = new ShallowforestFactory();
        const pineTree = new TreeType('pine', 'red', 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
        const orangeTree = new TreeType('orange', 'green', 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY');
        const mapleTree = new TreeType('maple', 'brown', 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');
        deepForest.addTrees(pineTree, 100);
        deepForest.addTrees(orangeTree, 100);
        deepForest.addTrees(mapleTree, 100);
        shallowForest.addTrees(pineTree, 100);
        shallowForest.addTrees(orangeTree, 100);
        shallowForest.addTrees(mapleTree, 100);
        expect(deepForest.getSize()).to.be.above(shallowForest.getSize());
        console.log('DeepForest: ', deepForest.getSize(), ' > ', 'ShallowForest: ', shallowForest.getSize());
        expect(deepForest.renderForest()).to.equal(shallowForest.renderForest());
    });

});
