class ReadyState {
  constructor(player) {
    this.player = player;
  }

  clickPlay() {
    this.player.changeState(new PlayingState(this.player));
  }

  clickPause() {

  }

  clickStop() {

  }

  clickClose() {
    this.player.changeState(new CloseState(this.player));
  }

  renderScreen() {
    return "Hello";
  }

}

class PlayingState extends ReadyState{
  constructor(player) {
    super(player);
  }

  clickPause() {
    this.player.changeState(new PauseState(this.player));
  }

  clickStop() {
    this.player.changeState(new ReadyState(this.player));
  }

  renderScreen() {
    return "Playing";
  }

}

class PauseState extends ReadyState{
  constructor(player) {
    super(player);
  }

  clickPlay() {
    this.player.changeState(new PlayingState(this.player));
  }

  clickStop() {
    this.player.changeState(new ReadyState(this.player));
  }

  renderScreen() {
    return "...";
  }

}

class CloseState extends ReadyState {
  constructor(player) {
    super(player);
  }

  clickPlay() {

  }

  renderScreen() {
    return "Goodbye"
  }

}

class Winamp {
  constructor(state) {
    this.state = new ReadyState(this);
  }

  changeState(state) {
    this.state = state;
  }

  clickPlay() {
    this.state.clickPlay();
  }

  clickPause() {
    this.state.clickPause();
  }

  clickStop() {
    this.state.clickStop();
  }

  clickClose() {
    this.state.clickClose();
  }

}

export { ReadyState, PlayingState, PauseState, CloseState, Winamp };
