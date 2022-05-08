let Humen = require("../models/humen");

let getHumens = () => {
  return new Promise((resolve, reject) => {
    Humen.find()
      .then((humens) => resolve(humens))
      .catch((err) => reject(err));
  });
};

let createHumen = (name, birthday, age) => {
  return new Promise((resolve, reject) => {
    let humen = new Humen({
      name,
      birthday,
      age,
    });
    humen
      .save()
      .then((humen) => resolve(humen))
      .catch((err) => reject(err));
  });
};

module.exports = {
  getHumens,
  createHumen,
};
