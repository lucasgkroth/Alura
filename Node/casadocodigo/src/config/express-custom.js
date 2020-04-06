const express = require('express')
const app = express()

var rotas = require('../app/rotas.js')
rotas(app)

module.exports = app

