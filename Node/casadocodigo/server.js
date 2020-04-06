const app = require('./src/config/express-custom.js')

var PORT = process.env.PORT || 3000
var HOST = "0.0.0.0"

app.listen(3000, function () {
    console.log(`Servidor ${HOST} rodando na porta ${PORT}`)
});