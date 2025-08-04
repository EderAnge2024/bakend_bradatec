const express= require('express')
const router = require('./routes/index')
const cors= require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

const server = express()

server.use(cors({
  origin: 'https://pruebabrada.kesug.com', // 👈 cambia si tu frontend está en otro puerto
  credentials: true                // 👈 necesario para que se envíen cookies
}))
server.use(morgan('dev'))
server.use(express.json())
server.use(cookieParser()) // 👈 habilita req.cookies

server.use(router)

module.exports = server