const express = require('express');
const path = require('path');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');

const puerto = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, './public');
app.set('views', path.join(__dirname, './src/views'));


app.set('view engine', 'ejs');

app.use(express.static(publicPath));

app.use(mainRoutes);
app.use('/shop', shopRoutes);


app.listen(puerto, () => console.log('Servidor corriendo en puerto ' + puerto));
