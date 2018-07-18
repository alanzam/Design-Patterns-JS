const expect = require('chai').expect;

import { MemoryRepo, MemoryDbRepo, DbMemory, InMemory, DataObject }  from '../src/structural/facade/facade_es6';

describe('facade es6 tests', () => {

    it('facade/wrapper for memory access', () => {
        let obj1 = new DataObject(1, 'Test');
        let obj2 = new DataObject(2, 'Test2');
        let obj3 = new DataObject(1, 'Test3');

        const repo = new MemoryRepo();
        repo.addOrUpdateObject(obj1);
        expect(repo.getObject(1)).to.equal(obj1);
        repo.addOrUpdateObject(obj3);
        expect(repo.getObject(1)).to.equal(obj3);
        expect(repo.getObject(2)).to.equal(null);
        repo.addOrUpdateObject(obj2);
        expect(repo.getObject(2)).to.equal(obj2);
    });

    it('facade/wrapper for db access', () => {
        let obj1 = new DataObject(1, 'Test');
        let obj2 = new DataObject(2, 'Test2');
        let obj3 = new DataObject(1, 'Test3');

        const repo = new MemoryDbRepo();
        repo.addOrUpdateObject(obj1);
        expect(repo.getObject(1)).to.equal(obj1);
        repo.addOrUpdateObject(obj3);
        expect(repo.getObject(1)).to.equal(obj3);
        expect(repo.getObject(2)).to.equal(null);
        repo.addOrUpdateObject(obj2);
        expect(repo.getObject(2)).to.equal(obj2);
    });

});
