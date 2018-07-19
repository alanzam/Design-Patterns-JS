const expect = require('chai').expect;
import { FacebookFriend, FacebookContact, Facebook, FriendSearch, ContactSearch } from '../src/behavioral/iterator/iterator_es6';


describe('iterator tests', () => {
    it('Facebook Finder', () => {
        const facebook = new Facebook();
        for (let i = 0; i < 5; i++)
          facebook.addContact(new FacebookContact());
        for (let i = 0; i < 5; i++)
          facebook.addContact(new FacebookFriend());
        const friendFinder = new FriendSearch(facebook.contacts);
        const contactFinder = new ContactSearch(facebook.contacts);
        let friendCount = 0;
        let contactCount = 0;
        while (friendFinder.hasNext())
          friendCount += friendFinder.next() !== undefined ? 1 : 0;
        while (contactFinder.hasNext())
          contactCount += contactFinder.next() !== undefined ? 1 : 0;
        expect(contactCount).to.be.above(friendCount);
        expect(contactCount).to.equal(10);
        expect(friendCount).to.equal(5);

    });
});
