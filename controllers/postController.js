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
    res.send('Dettaglio ricetta ' + req.params.id);
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