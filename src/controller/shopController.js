const path = require('path');
const items = require('../database/items');
const collections = require('../database/collections');

module.exports = {
    detail: (req, res) => {
        const itemID = req.params.id
        const item = items.find( el => el.id == itemID);
        const related = items.filter(el => el.licence == item.licence && el.id !== item.id);
        return res.render(path.resolve(__dirname, '../views/shop/productsDetails'), {
            pageTitle: item.item,
            item,
            carousel: {
                condition: "related",
                items: related,
                title: "productos relacionados"
            },
            collections
        });
    },
}