const process = require('process');
const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))

console.log('Directorio actual del trabajo:' , process.cwd());
console.log('Id del proceso:' ,  process.pid);
console.log('Version de Node:' ,  process.version);
console.log('Titulo del proceso:' ,  process.title);
console.log('Sistema operativo:' ,  process.platform);
console.log('Uso de la memoria:' , process.memoryUsage());
console.log('Ruta:' , process.execPath);

app.get('/api/randoms', (req, res) => {
    res.send(`No. randoms => `);
});

app.post('/randoms' , (req, res) =>{
    res.render('profile', {});
})
app.get('/api/info' , (req, res) =>{
    res.send(`Info => `);
})

//PUERTO 8080
app.listen(PORT , () => {
    console.log('Server is up and running in port =>' , PORT);
});