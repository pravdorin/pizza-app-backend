const Pizzas = require('../models/pizza');

exports.getpizzas = async function (req, res, next) {
      Pizzas.find({}, function(err, data){
      if(err){
        return res.status(500).send(err);
      }
      res.send(data);
    });
}