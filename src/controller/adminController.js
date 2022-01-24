const fs = require('fs');
const path = require('path');

const itemsFilePath = path.join(__dirname, '../database/items.json');
const items = JSON.parse(fs.readFileSync(itemsFilePath, 'utf-8'));

const collectionsFilePath = path.join(__dirname, '../database/items.json');
const collections = JSON.parse(fs.readFileSync(collectionsFilePath, 'utf-8'));



module.exports = {
    index: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/index'), 
        {
            pageTitle: 'Listado de Productos',
            items,
        });
    },
    create: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create'), 
        {
            pageTitle: 'Crear Producto',
        });
    },
    store: (req, res) => {
        console.log(req.body);

        let newItem = {
            id: items.length + 1,
            collection: req.body.collection,
            licence: collections.find( collection => collection.collection == req.body.collection).licence,
            name: req.body.name,
            description: req.body.description,
            img: {
                front: '',
                back: ''
            },
            sku: req.body.sku,
            price: parseFloat(req.body.price),
            dues: Number(req.body.dues),
            stock: Number(req.body.stock),
            sells: 0
        }

        items.push(newItem);
        fs.writeFileSync(itemsFilePath, JSON.stringify(items, null, ' '));

		res.redirect('/admin');
    },
    edit: (req, res) => {

        let producto = items.find( item => item.sku == req.params.id);

        res.render(path.resolve(__dirname, '../views/admin/edit'), 
        {
            pageTitle: 'Editar Producto ' + producto.name,
            item: producto,
        });
    },
}