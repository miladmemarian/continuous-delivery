const express = require("express");

module.exports = function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.send(
      "continuous-delivery" +
        " " +
        "A practice repository for testing and deployment."
    );
  });
  return app;
};
