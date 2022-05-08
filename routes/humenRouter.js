let express = require("express");
router = express.Router();
let { getHumens, createHumen } = require("../controllers/humenController");

const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 22 });

router.get("/", (req, res) => {
  if (myCache.has("humens")) {
    console.log("from cache");
    return res.json(myCache.get("humens"));
  } else {
    console.log("from db");
    getHumens()
      .then((humens) => {
        myCache.set("humens", humens);
        res.status(200).json(humens);
      })
      .catch((err) => res.status(400).json(err));
  }
});

router.post("/", (req, res) => {
  let { name, birthday, age } = req.body;
  createHumen(name, birthday, age)
    .then((humen) => res.status(200).json(humen))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
