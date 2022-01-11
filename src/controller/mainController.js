const path = require('path');
const items = require('../database/items');
const collections = require('../database/collections');

module.exports = {
    index: (req, res) => {
        let data = items.filter(el => el.sells > 10).sort((a ,b) => b.sells - a.sells);
        return res.render('home', {
            pageTitle: "Home",
            carousel: {
                condition: "news",
                items: data,
                title: "últimos lanzamientos"
            },
            collections
        })
    },
}