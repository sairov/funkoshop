const express = require('express');
const path = require('path');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');

const puerto = process.env.PORT || 3000;


app.set('view engine', 'ejs');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.use(mainRoutes);

app.listen(puerto, () => console.log('Servidor corriendo en puerto ' + puerto));