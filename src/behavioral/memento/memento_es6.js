class Memento {
    constructor(event, goodEvent) {
      this.event = event;
      this.allGood = goodEvent;
    }
}

class TimeMachine {
    constructor() {
        this.worldStates = [];
        this.currentEvent = -1;
    }

    addEvent(memento) {
        this.currentEvent++;
        if (this.currentEvent > this.worldStates.length - 1)
          this.worldStates.push(memento);
        else
          this.worldStates[this.currentEvent] = memento;
    }

    allGood() {
      if (this.currentEvent < 0) return false;
      return this.worldStates[this.currentEvent].allGood;
    }

    revertRecentEvent() {
        if (this.currentEvent < 0) return;
        this.worldStates.pop();
        this.currentEvent--;
    }

    restartHistory(from) {
      if (this.currentEvent < 0)
        this.currentEvent = -1;
      else
        this.currentEvent = from;
    }

    getRecentEvent() {
      if (this.currentEvent < 0) return "Nothing";
      return this.worldStates[this.currentEvent].event;
    }

    getEventInTime(epoch) {
        try {
          return this.worldStates[epoch].event;
        } catch (e) {
          return "TimeEvent out of bounds";
        }

    }
}

export { TimeMachine, Memento };
