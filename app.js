const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');

// Routes import
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const userRoutes = require('./src/routes/userRoutes');
const adminRoutes = require('./src/routes/adminRoutes');

// Puerto
const puerto = process.env.PORT || 3000;

// Carpeta Pública
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

// Parseamos nuestros datos para leer el body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Override para habilitar métodos PUT y DELETE
app.use(methodOverride('_method'));

// Views config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));


// Routers

app.use('/', mainRoutes);
app.use('/', userRoutes);
app.use('/shop',shopRoutes);
app.use('/admin',adminRoutes);
app.use((req, res, next) => {
    res.status(404).render('404')
})

// Lanzamiento del servidor

app.listen(puerto, () => console.log('Servidor corriendo en puerto ' + puerto));
