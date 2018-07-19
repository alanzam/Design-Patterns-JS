class FacebookContact {
  constructor(isFriend) {
    this.isFriend = isFriend ? true : false;
  }
}

class FacebookFriend extends FacebookContact {
  constructor() {
    super(true);
  }
}

class Facebook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }
}

class FriendSearch {
    constructor(contacts) {
        this.index = 0;
        this.contacts = contacts;
    }

    next() {
        while (this.hasNext()) {
          const nextContact = this.contacts[this.index++];
          if (nextContact.isFriend)
            return nextContact;
        }
        return undefined;
    }

    hasNext() {
        return this.index < this.contacts.length;
    }
}

class ContactSearch {
    constructor(contacts) {
        this.index = 0;
        this.contacts = contacts;
    }

    next() {
        return this.contacts[this.index++];
    }

    hasNext() {
        return this.index < this.contacts.length;
    }
}

export {FacebookFriend, FacebookContact, Facebook, FriendSearch, ContactSearch};
