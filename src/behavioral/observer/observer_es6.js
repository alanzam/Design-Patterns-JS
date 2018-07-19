class Twitter {
    constructor() {
        this.followers = [];
    }

    register(observer) {
        this.followers.push(observer);
    }

    unregister(observer) {
        this.followers = this.followers.filter(function(el) {
            return el !== observer;
        });
    }

    tweet(message) {
        return this.followers.forEach(function(el) {
            el.readTweet(message);
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
