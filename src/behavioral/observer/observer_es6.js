class Twitter {
    constructor() {
        this.tweet = "";
        this.followers = [];
    }

    register(observer) {
        this.followers.push(observer);
    }

    unregister(observer) {
        this.followers.remove.filter(function(el) {
            return el !== observer;
        });
    }

    tweet(message) {
        return this.followers.forEach(function(el) {
            el.update(message);
        }.bind(this));
    }
}

class Follower {
    constructor() {
      this.readMessages = [];
    }
    readTweet(tweet) {
      this.readMessages.push(tweet);
    }
    getReadMessages() {
      return this.readMessages;
    }
}

class TwitStar {
    constructor(twitter) {
      this.twitter = twitter;
    }
    publishTweet(message) {
      this.twitter.tweet(message);
    }
}

export { TwitStar, Follower, Twitter };
