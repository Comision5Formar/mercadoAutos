const express = require('express');
const router = express.Router(); //traigo el metodo Router

const autosController = require('../controllers/autosController');

router.get('/',autosController.index);
router.get('/detalle',autosController.detail);



module.exports = router;