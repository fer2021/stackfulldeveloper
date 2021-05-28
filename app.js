const express = require('express') // trae el modulo de express para poder montar el servidor
const path = require('path')
const app = express()
publicPath = path.join(__dirname, 'public') // indica que la ruta contiene recursos estaticos para consumir de manera sencilla
console.log(publicPath) // nos da por consola la ruta del public

app.set('views', path.join(__dirname, "views"))

app.set('view engine', 'ejs');

app.use(express.static('public'));

const indexRoutes = require('./routes/indexRoutes')

app.use('/', indexRoutes);

app.listen(process.env.PORT || 3060), () => console.log('Servidor corriendo ') // levantamos una server en localhost