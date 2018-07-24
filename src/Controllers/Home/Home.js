const User = require('../../Models/User');



const home_page = function (req, res) {
    var id = req.params.id;
    res.send(id);
};

module.exports = {
    home_page: home_page
}