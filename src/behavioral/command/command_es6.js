class Player {
  constructor() {
    this.beats = [];
  }

  playSong() {
    let song = "";
    this.beats.forEach(function(beat) {
        song += beat.loop();
    });
    return song;
  }

  getDuration() {
    let duration = 0;
    this.beats.forEach(function(beat) {
        duration += beat.getTime();
    });
    return duration;
  }

  addCube(cube) {
    this.beats.push(cube);
  }

}

class BeatCube {
  constructor(beat, time) {
    this.beat = beat;
    this.time = time !== undefined ? time : 1;
  }

  demoPlay() {
    return this.beat.play();
  }

  loop() {
    let loop = "";
    for (let i = 0; i < this.time; i++)
      loop += this.beat.play();
    return loop;
  }

  getTime() {
    return this.time;
  }
}

class HipHopBeat {
  play() {
    return "O------X--O----X";
  }
}

class RockBeat {
  play() {
    return "O-X-O-X-O-X-O-X-";
  }
}

class DiscoBeat {
  play() {
    return "O - X - O - X - ";
  }
}

class ReggaeBeat {
  play() {
    return "O - - - X - - - O";
  }
}


export { Player, BeatCube, HipHopBeat, DiscoBeat, RockBeat, ReggaeBeat };
