const User = require('../models/user');

exports.sendorder = async function (req, res, next) {
    const name = req.body.formProps.name;
    const email = req.body.formProps.email;
    const tel = req.body.formProps.tel;
    const address = req.body.formProps.address;

    const cart = req.body.cart;

    if (!email || !tel || !address) {
        return res.status(422).send({ error: 'You must provide required credentials!'})
    }

    User.findOne({ email: email }, function (err, existingUser) {
        if (err) { return next(err); }
        
        if (existingUser === null) {
            User.create({
                email: email,
                name: name,
                tel: tel,
                address: address,
                orders: cart
            }, function (err) {
                if (err) { return next(err); }
                res.status(200).send('Order successfully placed')
            })
        }

        if (existingUser) {
            User.findOne({ email: email }, function (err, user) {
                user.name = name;
                user.tel = tel;
                user.address = address;
                user.orders = [...user.orders, cart];
                
                user.save(function (err) {
                    if (err) { return next(err); }
                    res.status(200).send('Order successfully placed')
                })
           })
        }

    });
    
}

exports.getorders = async function (req, res, next) {
    const userOrders = User.findOne({email: req.user.email}, function (err, data) {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(data);
    });
}

exports.getprefill = async function (req, res, next) {
    const userOrders = User.findOne({email: req.user.email}, function (err, data) {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(data);
    });
}
