const path = require('path');
module.exports = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/login'), {
            pageTitle: 'Ingresa a tu cuenta'
        });
    },
    register: (req, res) => {
        res.render(path.resolve(__dirname, '../views/user/register'), {
            pageTitle: 'Registro'
        });
    },
}