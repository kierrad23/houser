const get = (req, res, next) => {
  const db = req.app.get("db");
  db.get_houses().then(houses => res.status(200).send(houses));
};

const create = (req, res, next) => {
  const db = req.app.get("db");
  db.create_listing([
    req.body.name,
    req.body.address,
    req.body.city,
    req.body.state,
    req.body.zipcode,
    req.body.img,
    req.body.mortgage,
    req.body.rent
  ]).then(houses => res.status(200).send(houses));
};

module.exports = { get, create };
