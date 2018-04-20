const { describe, it } = require("mocha");
const { expect } = require("chai");
const createApp = require("../create-app.js");
const request = require("request");

describe("App Tests", () => {
  const app = createApp();

  before(done => {
    server = app.listen(3000, () => {
      done();
    });
  });

  after(done => {
    server.close(() => {
      done();
    });
  });

  describe("Get /", () => {
    it("Responds with App link", done => {
      request("http://localhost:3000", (error, response, body) => {
        expect(body).to.equal(
          "https://milad-continuous-delivery.herokuapp.com"
        );
        done();
      });
    });
  });
});
