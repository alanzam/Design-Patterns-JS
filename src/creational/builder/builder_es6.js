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


export { RequestBuilder, DocBuilder, IBuilder, Request };
