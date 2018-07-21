const expect = require('chai').expect;
const assert = require('chai').assert;

import LabClass from '../src/lab/lab';

describe('lab test', () => {

    it('Lab Test', () => {
        const lab = new LabClass();
        expect(lab.helloWorld()).to.equal('Hi');
    });

});
