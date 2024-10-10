const express = require( 'express');
const router = express. Router();
const Inventario= require('../Controller/InventarioController');

// Endpoints 
router.get('/', Inventario.getAllproducts);
router.post('/', Inventario.addProduct);
router.put('/:id', Inventario.updateProducts);
router.delete('/:id', Inventario.deleteProducts);

module.exports = router;