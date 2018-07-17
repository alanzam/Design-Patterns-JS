
class GuiFactory {
  constructor() {
  }

  typeOf() {
    return "IGuiFactory";
  }

  renderBtn() {
    return this.Btn.render();
  }

  renderTitle() {
    return this.Title.render();
  }

  onClick() {
    return "Hi";
  }
}

class IBtn {
    render() {
        throw "Not Implemented";
    }
}

class ITitle {
    render() {
        throw "Not Implemented";
    }
}



export { GuiFactory, WinFactory, MacFactory };
