const path = require('path');
const Authentication = require('./controllers/authentication');
const PizzaController = require('./controllers/pizza');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
    app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
    app.get('/pizzas', PizzaController.getpizzas);
    app.post('/order', Authentication.sendorder);
    app.get('/orders', requireAuth, Authentication.getorders);
}