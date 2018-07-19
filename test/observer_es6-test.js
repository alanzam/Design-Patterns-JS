const expect = require('chai').expect;
import { TwitStar, Follower, Twitter } from '../src/behavioral/observer/observer_es6';


describe('observer tests', () => {
    it('Twitter', () => {
        const twitter = new Twitter();
        const donaldTrump  = new TwitStar(twitter);
        const follower1 = new Follower();
        const follower2 = new Follower();
        const follower3 = new Follower();
        twitter.register(follower1);
        twitter.register(follower2);
        donaldTrump.publishTweet("China");
        expect(follower2.getReadMessages().length).to.equal(follower1.getReadMessages().length);
        expect(follower1.getReadMessages()[0]).to.equal("China");
        expect(follower2.getReadMessages()[0]).to.equal("China");
        twitter.unregister(follower2);
        donaldTrump.publishTweet("Wall");
        expect(follower1.getReadMessages().length).to.equal(2);
        expect(follower1.getReadMessages()[1]).to.equal("Wall");
        expect(follower2.getReadMessages().length).to.equal(1);
        twitter.register(follower3);
        expect(follower3.getReadMessages().length).to.equal(0);
        donaldTrump.publishTweet("Make America Great Again");
        expect(follower3.getReadMessages().length).to.equal(1);
        expect(follower1.getReadMessages()[2]).to.equal("Make America Great Again");
        expect(follower3.getReadMessages()[0]).to.equal("Make America Great Again");
    });
});
