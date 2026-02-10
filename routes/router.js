const express = require('express');
const router = express.Router();

// Importo il controller
const postController = require('../controllers/postController');

// Definisco le rotte CRUD
router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/', postController.store);
router.put('/:id', postController.update);
router.patch('/:id', postController.modify);
router.delete('/:id', postController.destroy);

module.exports = router;