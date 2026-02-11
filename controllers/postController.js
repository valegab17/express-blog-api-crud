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
    //creo un nuovo id incrementando di 1 quello vecchio
   const newId = ricette[ricette.length -1].id +1;
   //creo un nuovo oggetto
   const newRecipe = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags
   }
   //aggiungo la ricetta al ricettario
   ricette.push(newRecipe);
   //solito controllo
   console.log(ricette);
   //risposta json
   res.status(201).json(newRecipe);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
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
    //recupero il parametro id
    const id = parseInt(req.params.id)
    //uso il find
    const post = ricette.find(post => post.id === id);
    //controllo
    if(!post){
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    ricette.splice(ricette.indexOf(post),1);

    //stampo in console la lista aggiornata
    console.log("Post eliminato. Lista aggiornata", ricette)
    //ora informo Express restituendo lo status corretto
    res.sendStatus(204) 
};

//  Esporto tutto l'oggetto
module.exports = { index, show, store, update, modify, destroy };