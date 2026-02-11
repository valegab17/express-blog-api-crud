//  Importo i dati
const ricette = require('../data/posts');

// Index (Ritorna la lista completa)
const index = (req, res) => {
    res.json({
        total: ricette.length,
        recipes: ricette
    });
};

// Show (Messaggio di testo per ora)
const show = (req, res) => {
  
        //recupero il mio id e lo trasformo in numero
        const id = parseInt(req.params.id)
        //uso il find
        const post = ricette.find (post => post.id === id);
        //eseguo il controllo 
        if(!post){
            //imposto lo stato 
            res.status(404)
            //restituisco un json con le altre informazioni 
            return res.json({
                error: "Not Found",
                message: "Post not Found"
            })
        }
        res.json(post);
  
};

// Store
const store = (req, res) => {
    res.send('Nuova ricetta');
};

// Update
const update = (req, res) => {
    res.send('Modifica totale ' + req.params.id);
};

// Modify
const modify = (req, res) => {
    res.send('Modifica parziale ' + req.params.id);
};

// Destroy
const destroy = (req, res) => {
    res.send('Elimina ricetta ' + req.params.id);
};

//  Esporto tutto l'oggetto
module.exports = { index, show, store, update, modify, destroy };