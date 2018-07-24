const User = require('../../Models/User');
const Position = require('../../Models/Position');
const { errorMessage } = require('../../../Util');
const home_page = function (req, res) {
    let userId = Number(req.params.id);

    User.findOne({ id: userId }).exec(function (err, user) {
        if (err) {
            console.log('err')
            res.sendStatus(404).json(errorMessage('id not found.'));
            return;
        } else {
            Position.findOne({ id: user.position }).exec(function (err, position) {
                if (err) {
                    console.log('err')
                    res.sendStatus(404).json(errorMessage('wrong position'));
                    return;
                } else {
                    res.json({
                        name: user.fullName,
                        position: position.name
                    });
                }
            });
        }
    });


};

module.exports = {
    home_page: home_page
}