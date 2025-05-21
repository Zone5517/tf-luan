const express = require('express');
const router = express.Router();

const ColaboradoresApiController = require('../app/Controllers/ColaboradoresApiController');

// Rotas de colaboradores
router.get('/colaboradores', ColaboradoresApiController.list);
router.get('/colaboradores/:id', ColaboradoresApiController.get);
router.post('/colaboradores', ColaboradoresApiController.insert);

module.exports = router;
