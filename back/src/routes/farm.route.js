const express = require('express');
const { createFarm, getFarms, getFarmById, updateFarm, deleteFarm } = require('../controllers/farm.controller.js');
const router = express.Router();

router.post('/', createFarm);
router.get('/', getFarms);
router.get('/:id', getFarmById);   
router.put('/:id', updateFarm);
router.delete('/:id', deleteFarm);


module.exports = router;