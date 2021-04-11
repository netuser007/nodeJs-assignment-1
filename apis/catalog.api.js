const express = require('express');
const apis = express.Router();

const repo = require('../repo/catalog.repo');
 
apis.get('/',(req, res) => {
    console.log('catalog-api >> getProducts');
    repo.getProducts((err, result)=> {
        if(err) {
            res.status(500).send({
                error: 'Internal server error!'
            });
        } else {
            res.status(200).send({
                products: result
            });
        }
    });
});

apis.get('/:id',(req, res) => {
    let productId = parseInt(req.params.id);
    repo.getProductsById(productId, (err, result)=> {
        if(err) {
            res.status(500).send({
                error: 'Internal server error!'
            });
        } else {
            res.status(200).send({
                result
            });
        }
    });
});

module.exports = {
    apis
}
