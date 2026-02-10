//importo express
const express = require('express');
//lo inizializzo invocandolo come funzione
const app = express();
//gli passo una porta a cui accedere
const port = 3000; 
//mi preparo già la comunicazione del router (gli dico ad app.js che esiste router.js)
const postsRouter = require('./routes/router');

//definisco la prima rotta
app.get('/', (req, res) => {
    res.send('<h1>HOME</h1>');
});

//collego le rotte del router
app.use('/posts', postsRouter);

//e metto il listen 
app.listen(port, () => {
    console.log(`App in ascolto su porta ${port}`);
});