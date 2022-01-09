const path = require('path');

module.exports = {
    index: (req, res) => res.render('home', {title: "Home"}),
}