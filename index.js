const express = require("express"),
  app = express(),
  port = 4000;
let mongoose = require("mongoose");
let humenRouter = require("./routes/humenRouter");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/humen", humenRouter);

mongoose
  .connect("mongodb://0.0.0.0:27017/cache", { useNewUrlParser: true })
  .then(() => {
    app.listen(port, () => {
      console.info(`start server start listening on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
