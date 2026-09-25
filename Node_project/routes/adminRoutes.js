const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res) => {
    res.send('Add Product');
});

router.post('/add-product', (req, res) => {
    console.log(req.body);
});

module.exports = router;