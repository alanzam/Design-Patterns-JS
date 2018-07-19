class GoogleMaps {
    constructor(strategy, destination) {
        this.destination = destination;
        this.strategy = strategy;
    }

    getEstimateTime() {
        return this.strategy(this.destination);
    }

    getDistance() {
        this.destination.distance;
    }
}

class Destination {
    constructor(start, end) {
      this.distance = end - start;
    }
}

function avoidHighway_Tolls(destination) {
    return (destination.distance * 3) / 60;
}

function avoidTolls(destination) {
    return (destination.distance * 1.5) / 60;
}

function avoidHighway(destination) {
    return (destination.distance * 2.5) / 60;
}

function defaultRoute(destination) {
    return destination.distance / 60;
}

export { Destination, GoogleMaps, avoidTolls, avoidHighway, avoidHighway_Tolls, defaultRoute };
