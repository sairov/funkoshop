const express = require('express');
const path = require('path');
const app = express();
const puerto = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/home.html')));

app.listen(puerto, () => console.log('Servidor corriendo en puerto ' + puerto));