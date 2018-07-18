
class GuiFactory {
  constructor() {
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

class WinBtn extends IBtn {
  render() {
    return "<win>Button</win>"
  }
}

class MacBtn extends IBtn {
  render() {
    return "<mac>Button</mac>"
  }
}

class WinFactory extends GuiFactory {
  constructor() {
    super();
    this.Btn = new WinBtn();
  }
}

class MacFactory extends GuiFactory {
  constructor() {
    super();
    this.Btn = new MacBtn();
  }
}

export { GuiFactory, WinFactory, MacFactory };
