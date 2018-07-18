class Request {
    constructor() {
        this.url = '';
        this.method = '';
        this.payload = {};
    }
}

class IBuilder {
    constructor() {
    }

    forUrl(url) {
      throw "Not Implemented";
    }

    useMethod(method) {
      throw "Not Implemented";
    }

    payload(payload) {
      throw "Not Implemented";
    }

}

class RequestBuilder extends IBuilder {
    constructor() {
      super();
      this.Request = new Request();
    }

    forUrl(url) {
      this.Request.url = url;
      return this;
    }

    useMethod(method) {
      this.Request.method = method;
      return this;
    }

    payload(payload) {
      this.Request.payload = payload;
      return this;
    }

    build() {
      return this.Request;
    }

}

class DocBuilder extends IBuilder {
    constructor() {
      super();
      this.docUrl = "";
      this.methodUrl = "";
      this.payloadUrl = "";
    }

    forUrl(url) {
      this.docUrl = url;
      return this;
    }

    useMethod(method) {
      this.methodUrl = method;
      return this;
    }

    payload(payload) {
      this.payloadUrl= payload;
      return this;
    }

    build() {
      return `<url>${this.docUrl}</url><method>${this.methodUrl}</method><payload>${this.payloadUrl}</payload>`;
    }

}


export { RequestBuilder, DocBuilder, IBuilder, Request };
