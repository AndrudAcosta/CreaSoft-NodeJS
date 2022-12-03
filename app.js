const express = require('express')
const hbs = require('hbs')
const app = express()
const port = 8181

//Especificar el directorio público
app.use(express.static('public'))

// Motor de plantilla
hbs.registerPartials(__dirname + '/views/partials/includes', function (err) {});
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')


app.get('/index', (req, res)=>{
    //res.sendFile(__dirname +'/public/views/contacto.html')
    res.render('index',{
        nombre: 'index'
    })
})
app.get('/usuarios', (req, res)=>{
    //res.sendFile(__dirname +'/public/views/contacto.html')
    res.render('usuarios',{
        nombre: 'usuarios'
    })
})
app.get('/roles', (req, res)=>{
    //res.sendFile(__dirname +'/public/views/contacto.html')
    res.render('roles',{
        nombre: 'roles'
    })
})
app.get('/productos', (req, res)=>{
    //res.sendFile(__dirname +'/public/views/contacto.html')
    res.render('productos',{
        nombre: 'productos'
    })
})

app.get('/Sign_in', (req, res)=>{
    //res.sendFile(__dirname +'/public/views/contacto.html')
    res.render('Sign_in',{
        nombre: 'Sign_in'
    })
})


app.get('*', (req, res)=>{
    //res.send('Pagina no encontrada')
    //res.sendFile(__dirname +'/public/views/404.html')
    res.render('404', {
        nombre: 'Pagina no encontrada'
    })
})

//verificar si el puerto esta escuchando
app.listen(port, ()=>{
    console.log(`Escuchando por el puerto ${port}`)
})