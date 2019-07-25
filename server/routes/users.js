var express = require('express');
var router = express.Router();

const users = [
    { username: 'admin', password: 'admin' },
    { username: 'hams', password: 'awesome' },
    { username: 'kevin', password: 'lawyer' }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
    const reqBody = req.body;

    var count = users.length;

    for (var i = 0; i < count; i++) {
        const user = users[i];
        if (user.username === reqBody.username && user.password === reqBody.password) {
            res.send('good id');
            return;
        }
    }
    res.send('bad id');
});

module.exports = router;
