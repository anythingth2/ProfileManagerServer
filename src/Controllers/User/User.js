
const User = require('../../Models/User')

const addUser = function (req, res) {

    User.create({ fullName: req.body.fullName, position: req.body.position }).then((user) => {
        res.send(user);
    });

}

module.exports = {
    addUser: addUser
}