
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

class WinFactory extends GuiFactory {
  constructor() {
    super();
    this.Btn = new WinBtn();
    this.Title = new WinTitle();
  }
}

class MacFactory extends GuiFactory {
  constructor() {
    super();
    this.Btn = new MacBtn();
    this.Title = new MacTitle();
  }
}

class IBtn {
    render() {
        return "";
    }
}

class ITitle {
    render() {
        return "";
    }
}

class WinBtn extends IBtn {
  render() {
    return "<win>Button</win>"
  }
}

class WinTitle extends ITitle {
  render() {
    return "<win>Title</win>"
  }
}

class MacBtn extends IBtn {
  render() {
    return "<mac>Button</mac>"
  }
}

class MacTitle extends ITitle {
  render() {
    return "<mac>Title</mac>"
  }
}


export { GuiFactory, WinFactory, MacFactory };
