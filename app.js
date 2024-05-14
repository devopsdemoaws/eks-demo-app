const express = require('express');

const mainRoutes = require('./pages/main');


const app = express(); 
app.use('/logos', express.static(__dirname + '/logos'));

app.use(express.urlencoded({ extended: true })); 

const port = 3000;

app.use('/', mainRoutes);

app.listen(port, () => {
  console.log(`Uygulama http://localhost:${port} adresinde çalışıyor`);
});
