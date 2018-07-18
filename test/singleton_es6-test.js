const expect = require('chai').expect;

import DbConnection from '../src/creational/singleton/singleton_es6';

describe('singleton_es6 test', () => {
    it('DbConnection singleton', () => {
        var dbConnection = new DbConnection();
        expect(dbConnection.getConnection()).to.equal("connection1");
        expect(dbConnection.getStatus()).to.equal(false);

        var dbConnection2 = new DbConnection();

        expect(dbConnection).to.equal(dbConnection2);
        expect(dbConnection === dbConnection2).to.be.true;

        dbConnection2.connect();
        expect(dbConnection.getStatus()).to.equal(true);
        dbConnection.changeConnection("connection2");

        expect(dbConnection.getConnection()).to.equal("connection2");
        expect(dbConnection2.getConnection()).to.equal("connection2");

        expect(dbConnection).to.equal(dbConnection2);
        expect(dbConnection === dbConnection2).to.be.true;
    });
});
