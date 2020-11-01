const path = require('path');
const AuthenticationController = require('./controllers/authentication');
const PizzaController = require('./controllers/pizza');
const OrderController = require('./controllers/order');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
    app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
    app.post('/signin', requireSignin, AuthenticationController.signin);
    app.post('/signup', AuthenticationController.signup);
    app.get('/pizzas', PizzaController.getpizzas);
    app.post('/order', OrderController.sendorder);
    app.get('/orders', requireAuth, OrderController.getorders);
    app.get('/prefill', requireAuth, OrderController.getprefill);
}