
const express = require("express");
const router = express.Router();
const path = require("path")
const rootDir = require('../utils/path')



router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    
})

router.post('/get-product', (req, res, next) => {
    console.log('Form data:', req.body);
    res.send('<b>Product Submitted</b>')


})

module.exports = router;