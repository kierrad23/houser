const express = require("express");
const bp = require("body-parser");
const cors = require("cors");
const app = express();
const massive = require("massive");
require("dotenv").config();

const ctrl = require("./controllers/mainctrl");

app.use(bp.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.get("/api/listings", ctrl.get);
app.post("/api/house", ctrl.create);
//app.delete('/api/house/:id')

port = 3001;

app.listen(port, () => console.log(port));
