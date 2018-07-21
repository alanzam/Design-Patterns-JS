const expect = require('chai').expect;
const assert = require('chai').assert;

import { Class, Interface, Singleton } from '../src/lab/lab';

describe('lab test', () => {

    it('Lab Test', () => {
      
        const interface_1 = new Interface();
        try {
          interface_1.helloWorld();
        } catch (e) {
          expect(e).to.equal('Not Implemented');
        }

        const class_1 = new Class();
        expect(class_1.helloWorld()).to.equal('Hi');
    });

});
