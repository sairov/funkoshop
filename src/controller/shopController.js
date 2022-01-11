const path = require("path");
const items = require("../database/items");
const collections = require("../database/collections");

module.exports = {
  index: (req, res) => {
    let data = items
      .filter((el) => el.sells > 10)
      .sort((a, b) => b.sells - a.sells);
    return res.render(path.resolve(__dirname, "../views/shop/shop"), {
      pageTitle: "Tienda",
      items,
      carousel: {
        condition: "news",
        items: data,
        title: "últimos lanzamientos",
      },
    });
  },
  detail: (req, res) => {
    const itemID = req.params.id;
    const item = items.find((el) => el.id == itemID);
    const related = items.filter(
      (el) => el.licence == item.licence && el.id !== item.id
    );
    return res.render(
      path.resolve(__dirname, "../views/shop/productsDetails"),
      {
        pageTitle: item.item,
        item,
        carousel: {
          condition: "related",
          items: related,
          title: "productos relacionados",
        },
      }
    );
  },
};
