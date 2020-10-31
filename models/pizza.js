const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
    id: String,
    name: String,
    price: {
      USD: Number,
      EUR: Number,
    },
    image: String,
    description: String
});

const PizzaModel = mongoose.model('pizza', pizzaSchema);

module.exports = PizzaModel;