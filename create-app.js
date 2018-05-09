const express = require("express");

module.exports = function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.send("https://milad-continuous-delivery.herokuapp.com");
  });
  return app;
};
