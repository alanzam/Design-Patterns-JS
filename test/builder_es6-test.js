const expect = require('chai').expect;
const assert = require('chai').assert;

import { RequestBuilder, DocBuilder, IBuilder, Request } from '../src/creational/builder/builder_es6';

function generateRequest(builder) {
  const url = 'http://something/users';
  const method = 'GET';
  const request = builder.forUrl(url).useMethod(method).payload(null).build();
  return request;
}


describe('builder es6 test', () => {

  it('Interface Builder', () => {
      const builder = new IBuilder();
      try {
        const request = generateRequest(builder);
      } catch (e) {
        expect(e).to.equal("Not Implemented");
      }

  });

    it('Request Builder', () => {
        const builder = new RequestBuilder();
        const request = generateRequest(builder);
        assert.instanceOf(request, Request, 'Instance of Request');
        expect(request.method).to.equal('GET');
        expect(request.payload).to.be.null;
        expect(request.url).to.equal('http://something/users');
    });

    it('Doc Builder', () => {
        const builder = new DocBuilder();
        const requestDoc = generateRequest(builder);
        assert.notInstanceOf(requestDoc, Request, 'Instance of Request');
        expect(requestDoc).to.equal("<url>http://something/users</url><method>GET</method><payload>null</payload>");
    });
});
