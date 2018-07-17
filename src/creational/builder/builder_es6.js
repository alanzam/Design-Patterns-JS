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

class RequestBuilder extends IBuilder{
    constructor() {
        super();
        this.request = new Request();
    }

    forUrl(url) {
        this.request.url = url;
        return this;
    }

    useMethod(method) {
        this.request.method = method;
        return this;
    }

    payload(payload) {
        this.request.payload = payload;
        return this;
    }

    build() {
        return this.request;
    }

}

class DocBuilder extends IBuilder{
    constructor() {
        super();
        this.urlDoc = "";
        this.methodDoc = "";
        this.payloadDoc = "";
    }

    forUrl(url) {
        this.urlDoc = url;
        return this;
    }

    useMethod(method) {
        this.methodDoc = method;
        return this;
    }

    payload(payload) {
        this.payloadDoc = payload;
        return this;
    }

    build() {
        return `<url>${this.urlDoc}</url><method>${this.methodDoc}</method><payload>${this.payloadDoc}</payload>`;
    }

}

export { RequestBuilder, DocBuilder, IBuilder, Request };
